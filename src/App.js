import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Meats from './pages/Meats';
import Activities from './pages/Activities';
import SpecialEvents from './pages/SpecialEvents';
import Directions from './pages/Directions';
import Contact from './pages/Contact';
import ButcherShop from './pages/gallery/ButcherShop';
import Farm from './pages/gallery/Farm';
import Barn from './pages/gallery/Barn';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(136, 193, 186)', // Teal color
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#ffffff', // White color
      contrastText: 'rgb(136, 193, 186)', // Teal text for contrast
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:hover': {
            backgroundColor: 'rgba(136, 193, 186, 0.9)',
          },
        },
        outlined: {
          borderColor: 'rgb(136, 193, 186)',
          '&:hover': {
            borderColor: 'rgb(136, 193, 186)',
            backgroundColor: 'rgba(136, 193, 186, 0.1)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Navbar />
          <main className="main-content" style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meats" element={<Meats />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/special-events" element={<SpecialEvents />} />
              <Route path="/gallery/butcher-shop" element={<ButcherShop />} />
              <Route path="/gallery/farm" element={<Farm />} />
              <Route path="/gallery/barn" element={<Barn />} />
              <Route path="/directions" element={<Directions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
