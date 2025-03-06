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
import Favicon from "react-favicon";

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
  const [faviconUrl, setFaviconUrl] = useState(
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png"
  );

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
