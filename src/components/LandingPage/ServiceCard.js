import { Typography } from '@mui/material';
import '../../App.css';
import config from '../../config';
import { useEffect, useRef, useState } from 'react';

function ServiceCard(props) {
  const { title, desc, imgSrc } = props;
  const [componentWidth, setComponentWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (ref?.current) {
      setComponentWidth(ref.current.clientWidth);
    }
  }, [ref]);

  const { colors } = config; // Récupère les couleurs depuis le fichier config

  return (
    <div
      ref={ref}
      style={{
        paddingTop: 20,
        height: '100%',
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.ultralight, // Couleur de fond depuis config
        border: `1px solid ${colors.light}`, // Bordure légère pour définir la carte
        borderRadius: 10, // Ajout d'une bordure arrondie
      }}
    >
      <img
        src={imgSrc}
        alt={title}
        style={{
          width: (componentWidth / 100) * 40,
          height: (componentWidth / 100) * 40,
        }}
      />
      <Typography
        variant="h5"
        style={{
          fontFamily: 'Newsreader',
          fontWeight: 'bold',
          textAlign: 'center',
          color: colors.dark, // Couleur du texte
          padding: componentWidth < 300 ? 0 : 15,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="span"
        style={{
          position: 'relative',
          bottom: 0,
          textAlign: 'center',
          fontFamily: 'Newsreader',
          padding: 15,
          paddingTop: 0,
          color: colors.secondary, // Texte secondaire depuis config
        }}
      >
        {desc}
      </Typography>
    </div>
  );
}

export default ServiceCard;
