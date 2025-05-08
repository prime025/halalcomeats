import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import butcherShop1 from '../../assets/butcher_shop_1.mp4';
import butcherShop2 from '../../assets/butcher_shop_2.mp4';

const ButcherShop = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Butcher Shop Gallery';
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          The Butcher Shop
        </Typography>
        
        <Typography variant="h6" color="text.secondary" paragraph align="left" sx={{ mb: 4 }}>
          Here is a virtual tour of our butcher shop. We strive to keep the butcher shop and slaughter house in the cleanest condition possible every day while ensuring no cross-contamination of the halal meats occurs.
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          mb: 6
        }}>
          <video
            controls
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <source src={butcherShop1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        <Typography variant="h6" color="text.secondary" paragraph align="left" sx={{ mb: 4 }}>
          Here is also a look inside our offices and equipment of our halal slaughter house farm.
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          mb: 4
        }}>
          <video
            controls
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <source src={butcherShop2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
    </Container>
  );
};

export default ButcherShop; 