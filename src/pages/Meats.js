import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import goat from '../assets/goat.jpg';
import lamb from '../assets/lamb.png';
import sheep from '../assets/sheep.png';
import whiteChicken from '../assets/white_chicken.jpg';
import brownChicken from '../assets/brown_chicken.png';
import organicChicken from '../assets/organic_chicken.jpg';
import pigeon from '../assets/pigeon.jpeg';
import duck from '../assets/duck.jpg';
import turkey from '../assets/turkey.jpg';
import quail from '../assets/quail.png';

const meatProducts = [
  {
    name: 'Goat',
    image: goat,
  },
  {
    name: 'Lamb',
    image: lamb,
  },
  {
    name: 'Sheep',
    image: sheep,
  },
  {
    name: 'White Chicken',
    image: whiteChicken,
  },
  {
    name: 'Brown Chicken',
    image: brownChicken,
  },
  {
    name: 'Organic Chicken',
    image: organicChicken,
  },
  {
    name: 'Pigeon',
    image: pigeon,
  },
  {
    name: 'Duck',
    image: duck,
  },
  {
    name: 'Turkey',
    image: turkey,
  },
  {
    name: 'Quail',
    image: quail,
  },
];

const Meats = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Our Products';
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Meats
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          We have one of the largest selections of halal live meats available. Shown below, meats available now include: Goat, Lamb, Sheep, White Chicken, Brown Chicken, Organic Chicken, Pigeon, Duck, Turkey, and Quail. All meats are hand cut zabiha. EBT available soon. Carne fresca disponible: pollo, cabra, y cordero.
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
          {meatProducts.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  sx={{ 
                    objectFit: 'contain', 
                    p: 1,
                    maxWidth: '100%',
                    width: 'auto',
                    margin: '0 auto'
                  }}
                />
                <CardContent sx={{ pt: 1, pb: 2 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2" 
                    align="center"
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: '1.5rem'
                    }}
                  >
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Meats; 