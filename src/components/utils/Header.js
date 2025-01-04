import { Button, Typography } from '@mui/material';
import '../../App.css';
import Grid from '@mui/material/Grid2';
import config from '../../config';
import { useEffect, useState } from 'react';

function Header({ navigate }) {
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [typeof window])

  return (
    <div style={{ top: 0, paddingTop: 10, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Grid container spacing={2} style={{ width: '100%' }}>
        <Grid onClick={() => navigate()} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} style={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 30, alignItems: 'center' }}>
          <div style={{ width: 45, height: 15, background: 'linear-gradient(90deg, rgba(158,184,191,1) 0%, rgba(111,140,164,1) 50%, rgba(50,67,110,1) 100%)' }} />
          <Typography variant="h3" component="h1" style={{ fontSize: '2em', marginRight: 15, marginLeft: 15, fontFamily: 'Tinos', color: config.colors.secondary }}>{config.COMPANYNAME}</Typography>
          <div style={{ width: 45, height: 15, background: 'linear-gradient(270deg, rgba(158,184,191,1) 0%, rgba(111,140,164,1) 50%, rgba(50,67,110,1) 100%)' }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} style={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 30, alignItems: 'center' }}>
          <Typography variant="h5" style={{ fontSize: '1.5em', fontFamily: 'Newsreader', color: config.colors.secondary }}>Simplifiez vos finances :</Typography>
          <Button color='basic' variant="contained" onClick={() => navigate()} style={{ fontFamily: 'Newsreader', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>{windowWidth < 1000 ? 'Contact' : 'Contactez-nous !'}</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
