import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import '../../App.css';
import Header from '../utils/Header';
import ServiceCard from './ServiceCard';
import Grid from '@mui/material/Grid2';
import Footer from '../utils/Footer';
import config from '../../config';
import { useEffect, useState } from 'react';

function LandingPage ({ navigate }) {
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [typeof window])

  const handleClick = () => {
    navigate('Form')
  };

  return (
    <div style={{ width: '100%' }}>
      <Header navigate={handleClick} option={true} />
      <div style={{ width: '100%', paddingTop: 45 }}>
        <div style={{ top: 100, marginLeft: 50, position: 'absolute' }}>
          <Typography component='h2' variant={windowWidth > 1300 ? 'h1' : (windowWidth > 900 ? 'h2' : 'h3')} style={{ width: '100%', fontFamily: 'Markazi' }}>Des solutions personnalisées</Typography>
          <Typography component='h2' variant={windowWidth > 1300 ? 'h2' : (windowWidth > 900 ? 'h3' : 'h4')} style={{  width: '100%', fontFamily: 'Markazi' }}>pour alléger vos mensualités</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ width: '50%', minHeight: 500, marginRight: 35, marginLeft: 35, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Card>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, marginBottom: 2 }}>
                  {config.COMPANYNAME}
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <img style={{ width: 100, height: 100 }} alt="simplifiez vos finances" src={require('../../pictures/icon_rachat_credits.png')} />
                  <Typography variant="body" style={{ fontFamily: 'Newsreader' }}>
                    Le rachat de crédits est bien plus qu'une simple démarche financière : c'est une opportunité pour reprendre le contrôle de vos finances et retrouver une sérénité au quotidien. Que vous souhaitiez faire face à des imprévus, financer de nouveaux projets, ou tout simplement vivre plus confortablement, le rachat de crédits est la solution idéale. Faites appel à nos services pour un accompagnement personnalisé et des résultats concrets. Ensemble, construisons une solution sur mesure adaptée à vos besoins !
                  </Typography>
                </div>
              </CardContent>
              <CardActions style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 25 }}>
                <Button size="small" onClick={() => handleClick()} style={{ right: 0, position: 'relative' }}>Nous contacter</Button>
              </CardActions>
            </Card>
          </div>
          <div style={{ width: '50%', height: '100%' }}>
            <img style={{ width: '100%', height: 'auto' }} alt="simplifiez vos finances" src={require('../../pictures/landingPagePeople.png')} />
          </div>
        </div>
          <Grid container spacing={2} style={{ padding: 30 }}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Un taux d'intérêt compétitif" desc="En optant pour un rachat de crédits, le Taux Annuel Effectif Global (TAEG) est l'un des éléments les plus importants à considérer. Un taux compétitif vous permet de réduire le coût total de votre emprunt et de réaliser des économies sur vos mensualités." imgSrc={require('../../pictures/taux.png')} />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Des mensualités adaptées à votre budget" desc='Le rachat de crédits vous offre la possibilité de regrouper vos prêts en une seule mensualité adaptée à vos revenus. Cela peut alléger vos dépenses mensuelles et vous aider à mieux gérer votre budget au quotidien.' imgSrc={require('../../pictures/monthly.png')} />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Des frais clairs et transparents" desc='Lors d’un rachat de crédits, il peut y avoir des frais de dossier, des assurances ou d’autres coûts. Avec nous, tout est clairement expliqué pour que vous puissiez avancer en toute confiance et sans surprises.' imgSrc={require('../../pictures/transparency.png')} />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Un impact positif sur votre quotidien" desc="L'objectif principal du rachat de crédits est d’améliorer votre confort financier. Avec une mensualité unique et adaptée, vous pourrez gérer vos dépenses plus sereinement et retrouver une situation financière stable." imgSrc={require('../../pictures/positiv_impact.png')} />
            </Grid>
          </Grid>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography component='h5' variant='h2' style={{ width: '80%', textAlign: 'center', fontFamily: 'Markazi' }}>Prenez rendez-vous avec nous dès maintenant pour un devis et une estimation sur-mesure !</Typography>
            <Button color='basic' onClick={() => handleClick()} variant="contained" style={{ fontFamily: 'Newsreader', marginTop: 45, marginBottom: 70, fontSize: '1.4vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Accèder au formulaire de contact</Button>
          </div>
        </div>
      <Footer navigate={navigate} />
    </div>
  );
}

export default LandingPage;
