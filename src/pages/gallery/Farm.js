import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia } from '@mui/material';
import farmVideo1 from '../../assets/farm_video_1.mp4';
import thefarm1 from '../../assets/thefarm1.JPG';
import thefarm2 from '../../assets/thefarm2.JPG';
import thefarm3 from '../../assets/thefarm3.JPG';
import thefarm4 from '../../assets/thefarm4.jpg';
import thefarm5 from '../../assets/thefarm5.JPG';
import thefarm6 from '../../assets/thefarm6.jpg';
import thefarm7 from '../../assets/thefarm7.jpg';
import thefarm8 from '../../assets/thefarm8.jpg';
import thefarm9 from '../../assets/thefarm9.jpg';
import thefarm10 from '../../assets/thefarm10.jpg';
import thefarm11 from '../../assets/thefarm11.jpg';
import thefarm12 from '../../assets/thefarm12.jpg';
import thefarm13 from '../../assets/thefarm13.jpg';

const farmImages = [
  { src: thefarm1, alt: 'Farm View 1' },
  { src: thefarm2, alt: 'Farm View 2' },
  { src: thefarm3, alt: 'Farm View 3' },
  { src: thefarm4, alt: 'Farm View 4' },
  { src: thefarm5, alt: 'Farm View 5' },
  { src: thefarm6, alt: 'Farm View 6' },
  { src: thefarm7, alt: 'Farm View 7' },
  { src: thefarm8, alt: 'Farm View 8' },
  { src: thefarm9, alt: 'Farm View 9' },
  { src: thefarm10, alt: 'Farm View 10' },
  { src: thefarm11, alt: 'Farm View 11' },
  { src: thefarm12, alt: 'Farm View 12' },
  { src: thefarm13, alt: 'Farm View 13' },
];

const Farm = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Farm Gallery';
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          The Farm
        </Typography>
        
        <Typography variant="h6" color="text.secondary" paragraph align="left" sx={{ mb: 4 }}>
          Our farm is located on a beautiful land of 107 acres in West Minister, Maryland, with stunning scenary and ample space for our large amount of animal livestock.
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph align="left" sx={{ mb: 2 }}>
          Videos of our wonderful land:
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start',
          mb: 6,
          maxHeight: '400px',
          margin: '0'
        }}>
          <video 
            controls 
            style={{ 
              maxWidth: '100%',
              maxHeight: '400px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <source src={farmVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        <Typography variant="h6" color="text.secondary" paragraph align="left" sx={{ mb: 4, mt: 6 }}>
          A gallery of the many sights to see on our farm:
        </Typography>

        <Grid container spacing={3}>
          {farmImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out'
                }
              }}>
                <CardMedia
                  component="img"
                  image={image.src}
                  alt={image.alt}
                  sx={{
                    height: 300,
                    width: '100%',
                    maxWidth: 300,
                    objectFit: 'contain',
                    backgroundColor: '#f5f5f5',
                    margin: '0 auto'
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Farm; 