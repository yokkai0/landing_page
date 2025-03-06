import { Button, Typography } from '@mui/material';
import '../../App.css';
import config from '../../config';

function Footer({ navigate }) {
  const { primary, dark } = config.colors;

  const handleClick = () => {
    navigate('Form');
  };

  return (
    <footer
        style={{
          marginTop: '4rem',
          padding: '1rem 0',
          backgroundColor: dark,
          color: primary,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          5 rue Gustave Simon 54000 Nancy - © 2025 Starto -{' '}
          <Button color="inherit" size="small" onClick={handleClick}>
            Nous contacter
          </Button>
        </Typography>
      </footer>
  );
}

export default Footer;
