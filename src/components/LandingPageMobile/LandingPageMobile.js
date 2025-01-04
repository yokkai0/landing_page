import { Button, Typography } from '@mui/material';
import '../../App.css';
import ServiceCard from './ServiceCard';
import Grid from '@mui/material/Grid2';
import Footer from '../utils/Footer';
import HeaderMobile from '../utils/HeaderMobile';

function LandingPageMobile ({ navigate }) {
  const handleClick = () => {
    navigate('Form')
  };

  return (
    <div style={{ width: '100%' }}>
      <HeaderMobile navigate={handleClick} option={true} />
      <div style={{ width: '100%', paddingTop: 45 }}>
        <div style={{ top: 65, marginLeft: 25, position: 'absolute' }}>
          <Typography component='h5' variant='h1' style={{ fontSize: '7.3vw', width: '100%', fontFamily: 'Markazi' }}>Des solutions personnalisées</Typography>
          <Typography component='h5' variant='h2' style={{ fontSize: '5.8vw', width: '100%', fontFamily: 'Markazi' }}>pour alléger vos mensualités</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div style={{ width: '100%', height: '100%' }}>
            <img style={{ width: '100%', height: 'auto' }} alt="simplifiez vos finances" src={require('../../pictures/landingPagePeople.png')} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '90%', padding: '5%', paddingBottom: 0 }}>
              <Typography style={{ color: '#000', padding: 25, fontFamily: 'Newsreader', textAlign: 'center' }}>Le rachat de crédits est bien plus qu'une simple démarche financière : c'est une opportunité pour reprendre le contrôle de vos finances et retrouver une sérénité au quotidien. Que vous souhaitiez faire face à des imprévus, financer de nouveaux projets, ou tout simplement vivre plus confortablement, le rachat de crédits est la solution idéale. Faites appel à nos services pour un accompagnement personnalisé et des résultats concrets. Ensemble, construisons une solution sur mesure adaptée à vos besoins !</Typography>
            </div>
            <div style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginRight: '5%', marginLeft: '5%' }}>
              <img style={{ width: '40%', height: 'auto' }} alt="simplifiez vos finances" src={require('../../pictures/icon_rachat_credits.png')} />
              <Button color='basic' variant="contained" onClick={() => handleClick()} style={{ fontSize: '1.2em', fontFamily: 'Newsreader', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Contactez-nous</Button>
            </div>
          </div>
        </div>
          <Grid container spacing={1} style={{ padding: 30 }}>
            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Un taux d'intérêt compétitif" desc="En optant pour un rachat de crédits, le Taux Annuel Effectif Global (TAEG) est l'un des éléments les plus importants à considérer. Un taux compétitif vous permet de réduire le coût total de votre emprunt et de réaliser des économies sur vos mensualités." imgSrc={require('../../pictures/taux.png')} />
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Des mensualités adaptées" desc='Le rachat de crédits vous offre la possibilité de regrouper vos prêts en une seule mensualité adaptée à vos revenus. Cela peut alléger vos dépenses mensuelles et vous aider à mieux gérer votre budget au quotidien.' imgSrc={require('../../pictures/monthly.png')} />
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Des frais transparents" desc='Lors d’un rachat de crédits, il peut y avoir des frais de dossier, des assurances ou d’autres coûts. Avec nous, tout est clairement expliqué pour que vous puissiez avancer en toute confiance et sans surprises.' imgSrc={require('../../pictures/transparency.png')} />
            </Grid>
            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }} style={{ height: '100%' }}>
              <ServiceCard title="Un impact positif" desc="L'objectif principal du rachat de crédits est d’améliorer votre confort financier. Avec une mensualité unique et adaptée, vous pourrez gérer vos dépenses plus sereinement et retrouver une situation financière stable." imgSrc={require('../../pictures/positiv_impact.png')} />
            </Grid>
          </Grid>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography component='h5' variant='h2' style={{ fontSize: '2em', width: '80%', textAlign: 'center', fontFamily: 'Markazi' }}>Prenez rendez-vous avec nous dès maintenant pour un devis et une estimation sur-mesure !</Typography>
            <Button color='basic' onClick={() => handleClick()} variant="contained" style={{ fontFamily: 'Newsreader', marginTop: 45, marginBottom: 70, fontSize: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Accèder au formulaire de contact</Button>
          </div>
        </div>
      <Footer navigate={navigate} />
    </div>
  );
}

export default LandingPageMobile;
