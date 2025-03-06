
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';import '../../App.css';
import config from '../../config';

function Header({ navigate, link }) {
  const { primary, background, white, secondary } = config.colors;

  const handleClick = () => {
    navigate(link);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: primary }}>
      <Toolbar style={{ justifyContent: 'space-between', backgroundColor: primary }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', color: white }}>
          {config.COMPANYNAME}
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: secondary, color: white }}
          onClick={handleClick}
        >
          <b>{link === 'landingPage' ? 'Accueil' : 'Contactez-nous !'}</b>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
