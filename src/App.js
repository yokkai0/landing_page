/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import config from './config';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
import LandingPageMobile from './components/LandingPageMobile/LandingPageMobile';
import Form from './components/Form/Form';

const theme = createTheme({
  palette: {
    basic: {
      main: config.colors.main,
      light: config.colors.light,
      dark: config.colors.dark,
      contrastText: 'white',
    },
  },
});

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('landingPage');

  useEffect(() => {
    if (loading && typeof window !== 'undefined') {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
      }
      setLoading(false)
    }
  }, [typeof window, loading])
  
  const navigate = (page) => {
    setCurrentPage(page);
  };

  const getComponent = () => {
    if (currentPage === 'landingPage') {
      if (isMobile) {
        return <LandingPageMobile navigate={navigate} />
      }
      return <LandingPage navigate={navigate} />
    }
    return <Form navigate={navigate} />
  };

  return (
    <ThemeProvider theme={theme}>
      {
        loading ?
        <div style={{ width: '100%', height: '100vh', backgroundColor: config.colors.primary, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress color='basic' />
        </div>
        :
          <div style={{ backgroundColor: config.colors.primary, top: 0, position: 'absolute', width: '100%' }}>
            {
              getComponent()
            }
          </div>
      }
    </ThemeProvider> 
  );
}

export default App;
