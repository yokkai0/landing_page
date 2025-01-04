import { Link, Typography } from '@mui/material';
import '../../App.css';
import config from '../../config';

function Footer({ navigate }) {
  return (
    <div style={{ backgroundColor: config.colors.primary, bottom: 0, paddingBottom: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="span" style={{ textAlign: 'center', fontFamily: 'Newsreader', color: config.colors.secondary }}>{config.footerData}</Typography>
      <Link onClick={() => navigate()} style={{ marginLeft: 5, textAlign: 'center' }}>Nous contacter</Link>
    </div>
  );
}

export default Footer;
