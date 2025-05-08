import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';

const Directions = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Directions';
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Directions
        </Typography>

        {/* Directions from Masjid Al-Rahmah */}
        <Typography variant="h5" component="h2" gutterBottom align="left" sx={{ mt: 4 }}>
          From Masjid Al-Rahmah
        </Typography>

        <Box sx={{ mt: 3, width: '100%', height: '600px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d197192.65445848546!2d-77.08364170293429!3d39.44367550914767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89c8194d35226fdf%3A0x4bd9d195caab939d!2sMasjid%20Al-Rahmah%2C%20Johnnycake%20Road%2C%20Windsor%20Mill%2C%20MD!3m2!1d39.303471099999996!2d-76.7480357!4m5!1s0x89c8342b8f1b3537%3A0xf51a79c118595b50!2s722%20Green%20Valley%20Rd%2C%20New%20Windsor%2C%20MD%2021776!3m2!1d39.5481519!2d-77.1176569!5e0!3m2!1sen!2sus!4v1746595313167!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Directions from Masjid Al-Rahmah to Halalco Farm"
          />
        </Box>

        {/* Directions from Masjid An-Nur */}
        <Typography variant="h5" component="h2" gutterBottom align="left" sx={{ mt: 6 }}>
          From Masjid An-Nur
        </Typography>

        <Box sx={{ mt: 3, width: '100%', height: '600px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d394126.5840938915!2d-77.12592329810404!3d39.489341750527934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89c80811314aea59%3A0x2f41664d19843be4!2s8020%20Corporate%20Dr%2C%20Nottingham%2C%20MD%2021236!3m2!1d39.3676253!2d-76.47194689999999!4m5!1s0x89c8342b8f1b3537%3A0xf51a79c118595b50!2s722%20Green%20Valley%20Rd%2C%20New%20Windsor%2C%20MD%2021776!3m2!1d39.5481519!2d-77.1176569!5e0!3m2!1sen!2sus!4v1746595395161!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Directions from Masjid An-Nur to Halalco Farm"
          />
        </Box>

        {/* Directions from Washington D.C. */}
        <Typography variant="h5" component="h2" gutterBottom align="left" sx={{ mt: 6 }}>
          From Washington D.C.
        </Typography>

        <Box sx={{ mt: 3, width: '100%', height: '600px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d395687.2246661728!2d-77.37960432536316!3d39.213205444290494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!3m2!1d38.9071923!2d-77.0368707!4m5!1s0x89c8342b8f1b3537%3A0xf51a79c118595b50!2s722%20Green%20Valley%20Rd%2C%20New%20Windsor%2C%20MD%2021776!3m2!1d39.5481519!2d-77.1176569!5e0!3m2!1sen!2sus!4v1746595534724!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Directions from Washington D.C. to Halalco Farm"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Directions; 