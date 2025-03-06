
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';import '../../App.css';
import config from '../../config';

function Header({ navigate, link }) {
  const { primary, main, dark } = config.colors;

  const handleClick = () => {
    navigate(link);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: dark }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', color: primary }}>
          {config.COMPANYNAME}
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: main, color: primary }}
          onClick={handleClick}
        >
          <b>{link === 'landingPage' ? 'Accueil' : 'Contactez-nous !'}</b>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
