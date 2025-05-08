import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'white',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2025 Halalco Meats
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 