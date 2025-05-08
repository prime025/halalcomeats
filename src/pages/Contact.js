import React, { useEffect } from 'react';
import { Container, Typography, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  useEffect(() => {
    document.title = 'Halalco Meats - Contact Us';
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>

        <Card sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Address"
                  secondary="722 Green Valley Road, New Windsor MD, 21776"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary="1-844 HALALCO (425-2526)"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Hours of Operation"
                  secondary="Six Days a Week from Tuesday to Sunday: 9:00 AM - 5:00 PM"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center" 
          sx={{ mt: 4, maxWidth: 800, mx: 'auto' }}
        >
          By Calling or Texting 1-844-425-2526 you agree to receive text messages from Halalco Meats Farm. If you do not wish to receive text messages, reply STOP.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 