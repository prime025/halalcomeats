import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import showcase1 from '../assets/showcase1.JPG';
import showcase2 from '../assets/showcase2.jpeg';
import showcase3 from '../assets/showcase3.jpeg';
import showcase4 from '../assets/showcase4.JPG';
import farm1 from '../assets/farm1.jpeg';
import farm2 from '../assets/farm2.jpeg';
import farm3 from '../assets/farm3.jpg';
import farm4 from '../assets/farm4.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [showcase1, showcase4, showcase3, showcase2];

  const showcaseContent = [
    {
      text: "Finest Provider of Zabiha Meats",
      buttonText: "Learn More",
      buttonLink: "/meats"
    },
    {
      text: "Fun for the Whole Family",
      buttonText: "Discover Now",
      buttonLink: "/activities"
    },
    {
      text: "Organize your event today",
      buttonText: "Book Now",
      buttonLink: "/special-events"
    },
    {
      text: "Huge Selection of Meats",
      buttonText: "Explore Now",
      buttonLink: "/meats"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.title = 'Halalco Meats - Home';
  }, []);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <Box>
      {/* Showcase Image Slider */}
      <Box
        sx={{
          width: '100vw',
          height: { xs: '450px', md: '750px' },
          position: 'relative',
          overflow: 'hidden',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          marginTop: 0,
          paddingTop: 0,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <img
              src={image}
              alt={`Showcase ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
        
        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            zIndex: 3,
            cursor: 'pointer',
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            zIndex: 3,
            cursor: 'pointer',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Overlay with Text */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
            width: '100%',
            padding: '0 20px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: { xs: '20px', sm: '30px', md: '40px' },
              borderRadius: '8px',
              maxWidth: '800px',
              margin: '0 auto',
              mb: 3,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
                letterSpacing: '0.5px',
                color: '#333333',
              }}
            >
              {showcaseContent[currentImage].text}
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to={showcaseContent[currentImage].buttonLink}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'rgb(136, 193, 186)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(116, 173, 166)',
              },
              fontSize: { xs: '1rem', sm: '1.2rem' },
              padding: { xs: '8px 24px', sm: '12px 32px' },
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {showcaseContent[currentImage].buttonText}
          </Button>
        </Box>
      </Box>

      {/* About Us Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'left',
            mb: 4,
            fontFamily: 'Open Sans, sans-serif',
            color: '#333333',
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            fontSize: '0.98rem',
            lineHeight: 1.8,
            textAlign: 'justify',
            color: '#333333',
            fontFamily: 'Open Sans, sans-serif',
          }}
        >
          Halalco Meats is located on a beautiful land of 107 acres in West Minister, Maryland. Halalco Meats has one of the largest variety of hand-cut zabiha halal meats available. We also offer family activities and provide hosting services for special events on our farm. Our slaughter house farm is close to Masjid Al-Rahmah (45 min), Masjid An-Nur (60 min), and Washington D.C. (60 min), making it the best location for live zabiha halal meats in the DMV area. We will soon provide EBT as available. Carne fresca disponible: pollo, cabra, y cordero.
        </Typography>

        {/* Farm Images Grid */}
        <Box>
          {/* First Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontFamily: 'Open Sans, sans-serif',
                color: '#333333',
                fontSize: '1.5rem',
                textAlign: 'center'
              }}
            >
              The Front Of The Slaughter House And Barn
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={12} md={12}>
                <Card sx={{ height: '100%', overflow: 'hidden', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
                  <CardMedia
                    component="img"
                    image={farm1}
                    alt="Farm View 1"
                    sx={{
                      height: 425,
                      objectFit: 'contain',
                      width: 'auto',
                      maxWidth: '100%'
                    }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Second Section */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontFamily: 'Open Sans, sans-serif',
                color: '#333333',
                fontSize: '1.5rem',
                textAlign: 'center'
              }}
            >
              Entrance To The Halal Farm
            </Typography>
            <Grid container direction="column" spacing={3} alignItems="center">
              <Grid item xs={12}>
                <Card sx={{ height: '100%', overflow: 'hidden', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
                  <CardMedia
                    component="img"
                    image={farm2}
                    alt="Farm View 2"
                    sx={{
                      height: 425,
                      objectFit: 'contain',
                      width: 'auto',
                      maxWidth: '100%'
                    }}
                  />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ height: '100%', overflow: 'hidden', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
                  <CardMedia
                    component="img"
                    image={farm3}
                    alt="Farm View 3"
                    sx={{
                      height: 425,
                      objectFit: 'contain',
                      width: 'auto',
                      maxWidth: '100%'
                    }}
                  />
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ height: '100%', overflow: 'hidden', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
                  <CardMedia
                    component="img"
                    image={farm4}
                    alt="Farm View 4"
                    sx={{
                      height: 425,
                      objectFit: 'contain',
                      width: 'auto',
                      maxWidth: '100%'
                    }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 