import { Button, Typography } from '@mui/material';
import '../../App.css';
import config from '../../config';

function HeaderMobile({ navigate, option }) {
  return (
    <div style={{ top: 0, paddingTop: 10, width: '100%' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: 45, height: 15, background: 'linear-gradient(90deg, rgba(158,184,191,1) 0%, rgba(111,140,164,1) 50%, rgba(50,67,110,1) 100%)' }} />
          <Typography variant="h3" component="h1" style={{ fontSize: '1.7em', marginRight: 15, marginLeft: 15, fontFamily: 'Tinos', color: config.colors.secondary }}>{config.COMPANYNAME}</Typography>
          <div style={{ width: 45, height: 15, background: 'linear-gradient(270deg, rgba(158,184,191,1) 0%, rgba(111,140,164,1) 50%, rgba(50,67,110,1) 100%)' }} />
      </div>
      {
        option && option === false ?
          <div style={{ display: 'flex', padding: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Typography variant="h5" style={{ fontSize: '1.2em', fontFamily: 'Newsreader', color: config.colors.secondary }}>Simplifiez vos finances :</Typography>
            <Button color='basic' onClick={() => navigate()} variant="contained" style={{ fontSize: '0.7em', fontFamily: 'Newsreader', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>Contactez-nous !</Button>
          </div>
        : null
      }
    </div>
  );
}

export default HeaderMobile;
