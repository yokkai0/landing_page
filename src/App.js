/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import config from './config';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
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
  const [currentPage, setCurrentPage] = useState('landingPage');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const getComponent = () => {
    if (currentPage === 'landingPage') {
      return <LandingPage navigate={navigate} />
    }
    return <Form navigate={navigate} />
  };

  return (
    <ThemeProvider theme={theme}>
      {
          <div style={{ height: '100vh', top: 0, width: '100%' }}>
            <div style={{ backgroundImage: "url('/background.png')", backgroundSize: "cover", backgroundPosition: "center", height: '100vh', top: 0, position: 'fixed', width: '100%' }} />
            {
              getComponent()
            }
          </div>
      }
    </ThemeProvider> 
  );
}

export default App;
