import React, { useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Terms = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Terms of Service';
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Terms and Conditions
        </Typography>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1" paragraph>
            Please review our terms and conditions by clicking the button below.
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<OpenInNewIcon />}
            href="https://app.websitepolicies.com/policies/view/ao3yq8bm"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            View Terms and Conditions
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Terms; 