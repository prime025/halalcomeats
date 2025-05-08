import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia } from '@mui/material';
import thebarn1 from '../../assets/thebarn1.jpg';
import thebarn2 from '../../assets/thebarn2.jpg';
import thebarn3 from '../../assets/thebarn3.jpg';
import thebarn4 from '../../assets/thebarn4.jpg';
import thebarn5 from '../../assets/thebarn5.jpg';
import thebarn6 from '../../assets/thebarn6.jpg';
import thebarn7 from '../../assets/thebarn7.jpg';
import thebarn8 from '../../assets/thebarn8.jpg';

const barnImages = [
  { src: thebarn1, alt: 'Barn View 1' },
  { src: thebarn2, alt: 'Barn View 2' },
  { src: thebarn3, alt: 'Barn View 3' },
  { src: thebarn4, alt: 'Barn View 4' },
  { src: thebarn5, alt: 'Barn View 5' },
  { src: thebarn6, alt: 'Barn View 6' },
  { src: thebarn7, alt: 'Barn View 7' },
  { src: thebarn8, alt: 'Barn View 8' },
];

const Barn = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Barn Gallery';
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          The Barn
        </Typography>
        
        <Typography variant="h6" color="text.secondary" paragraph align="left" sx={{ mb: 4 }}>
          Here is a closer look at the barn of our halal slaughter house farm.
        </Typography>

        <Grid container spacing={3}>
          {barnImages.map((image, index) => (
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

export default Barn; 