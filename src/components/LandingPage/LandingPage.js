/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import config from '../../config.js';

function LandingPage({ navigate }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      }
    }
  }, [typeof window]);

  const handleClick = () => {
    navigate('Form');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { primary, secondary, main, light, dark, ultralight } = config.colors;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: ultralight }}>
      {/* Header */}
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
            Contactez-nous !
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container style={{ marginTop: '2rem', position: 'relative' }}>
        {/* Introduction */}
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ fontWeight: 'bold', color: dark, marginBottom: '1rem' }}>
              Des solutions personnalisées
            </Typography>
            <Typography variant="h4" style={{ marginBottom: '1.5rem', color: secondary }}>
              pour alléger vos mensualités
            </Typography>
            {isMobile ? (
              <img
                src={require('../../pictures/landingPagePeople.png')}
                alt="Illustration du rachat de crédits"
                style={{
                  width: '100%',
                  height: 'auto',
                  marginBottom: 10,
                  borderRadius: '8px',
                }}
              />
            ) : null}
            <Card elevation={2} style={{ padding: '1rem', backgroundColor: primary }}>
              <CardContent>
                <Typography variant="body1" style={{ marginBottom: '1rem', color: dark }}>
                  Le rachat de crédits est bien plus qu'une simple démarche financière : c'est une opportunité pour
                  reprendre le contrôle de vos finances et retrouver une sérénité au quotidien. Que vous souhaitiez
                  faire face à des imprévus, financer de nouveaux projets, ou tout simplement vivre plus confortablement,
                  le rachat de crédits est la solution idéale. Faites appel à nos services pour un accompagnement
                  personnalisé et des résultats concrets.
                </Typography>
                <Button
                  variant="filled"
                  style={{
                    color: '#fff',
                    borderColor: '#fff',
                    backgroundColor: main,
                  }}
                  onClick={handleClick}
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {!isMobile ? (
            <img
              src={require('../../pictures/landingPagePeople.png')}
              alt="Illustration du rachat de crédits"
              style={{
                width: '50%',
                height: 'auto',
              }}
            />
          ) : null}
        </Grid>

        {/* Features Section */}
        <Grid container spacing={4} style={{ marginTop: '4rem' }}>
          {[
            {
              title: "Un taux d'intérêt compétitif",
              desc: "Un taux compétitif vous permet de réduire le coût total de votre emprunt et de réaliser des économies sur vos mensualités.",
              img: require('../../pictures/taux.png'),
            },
            {
              title: 'Des mensualités adaptées à votre budget',
              desc: 'Regroupez vos prêts en une seule mensualité adaptée à vos revenus pour mieux gérer votre budget au quotidien.',
              img: require('../../pictures/monthly.png'),
            },
            {
              title: 'Des frais clairs et transparents',
              desc: 'Avec nous, tout est clairement expliqué pour que vous puissiez avancer en toute confiance et sans surprises.',
              img: require('../../pictures/transparency.png'),
            },
            {
              title: 'Un impact positif sur votre quotidien',
              desc: 'Gérez vos dépenses plus sereinement avec une mensualité unique et adaptée pour retrouver une situation financière stable.',
              img: require('../../pictures/positiv_impact.png'),
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={3}
                style={{
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: ultralight,
                  border: `1px solid ${light}`,
                }}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  style={{ width: '70px', marginBottom: '1rem' }}
                />
                <Typography variant="h6" style={{ fontWeight: 'bold', color: dark, marginBottom: '0.5rem' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" style={{ color: secondary }}>
                  {feature.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: dark,
            color: primary,
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Prenez rendez-vous avec nous dès maintenant
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '2rem' }}>
            Pour un devis et une estimation sur-mesure !
          </Typography>
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: main, color: primary, padding: '0.8rem 2rem' }}
            onClick={handleClick}
          >
            Accéder au formulaire de contact
          </Button>
        </div>
      </Container>

      {/* Footer */}
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
    </div>
  );
}

export default LandingPage;
