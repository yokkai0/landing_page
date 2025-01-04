import { Avatar, Typography } from '@mui/material';
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

  return (
      <div ref={ref} style={{ paddingTop: 20, height: '100%', paddingBottom: 20, paddingRight: 10, paddingLeft: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={imgSrc} alt={title} style={{ width: componentWidth / 100 * 40, height: componentWidth / 100 * 40}} />
        <Typography variant='h5' style={{ fontFamily: 'Newsreader', fontWeight: 'bold', textAlign: 'center', padding: componentWidth < 300 ? 0 : 15 }}>
          {title}
        </Typography>
        <Typography variant='span' style={{ position: 'relative', bottom: 0, textAlign: 'center', fontFamily: 'Newsreader', padding: 15, paddingTop: 0 }}>
          {desc}
        </Typography>
      </div>
  );
}

export default ServiceCard;
