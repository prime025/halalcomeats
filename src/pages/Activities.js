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
import pony2 from '../assets/pony-2.jpg';
import llama from '../assets/llama.jpeg';
import deer from '../assets/deer.jpeg';

const activities = [
  {
    title: 'Pony Rides',
    description: 'Pony horse rides will be available for all kids.',
    image: pony2,
  },
  {
    title: 'Petting Zoo',
    description: 'The petting zoo wil be open for lots of family fun. Includes animals such as llamas, ducks, pigeons, and more.',
    image: llama,
  },
  {
    title: 'Deer Hunting and Processing',
    description: 'Deer hunting will be available during the hunting season for ages 18+. Deer processing will also offered during all seasons.',
    image: deer,
  },
];

const Activities = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Activities';
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Activities
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          The following activities are coming soon:
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2, justifyContent: 'center' }}>
          {activities.map((activity) => (
            <Grid item key={activity.title} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    image={activity.image}
                    alt={activity.title}
                    sx={{
                      objectFit: 'cover',
                      width: '100%',
                      height: {
                        xs: '300px',
                        sm: '350px',
                        md: '400px'
                      },
                      maxWidth: '600px'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" align="left">
                    {activity.title}
                  </Typography>
                  <Typography paragraph align="left">
                    {activity.description}
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

export default Activities; 