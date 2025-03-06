/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import config from '../../config.js';
import Footer from '../utils/Footer.js';
import Header from '../utils/Header.js';

function LandingPage({ navigate }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      }
    }
  }, [typeof window]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { primary, secondary, main, light, dark, ultralight } = config.colors;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <Header link={'Form'} navigate={navigate} />

      {/* Main Content */}
      <Container style={{ position: 'relative', maxWidth: '100vw', padding: 0 }}>
        <div style={{ left: 0, width: '100vw', height: 400, backgroundColor: secondary }}>
          <Typography>
            exclu leads
          </Typography>
        </div>
        <div style={{ position: 'absolute', left: 0, display: 'inline-block', height: 300, width: 0, borderTop: `160px solid ${secondary}`, borderRight: '100vw solid transparent' }} />
        <div style={{ width: '100vw', height: 50 }} />
        <div style={{ position: 'absolute', left: 0, display: 'inline-block', height: 300, width: 0, borderBottom: `160px solid ${secondary}`, borderLeft: '100vw solid transparent' }} />
        <div style={{ left: 0, width: '100vw', height: 400, marginTop: 460, backgroundColor: secondary }}>
          <Typography>
            exclu leads
          </Typography>
        </div>
      </Container>

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

export default LandingPage;
