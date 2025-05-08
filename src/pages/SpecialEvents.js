import React, { useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const SpecialEvents = () => {
  const events = [
    'Aqeeqah',
    'Party',
    'Marriage',
    'Nepali And African Festivals'
  ];

  useEffect(() => {
    document.title = 'Halalco Meats - Special Events';
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Special Events
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="left" sx={{ mb: 4 }}>
          If you would like to arrange your special event with us, please contact us to do so. Events that we host which will be available soon are listed below.
        </Typography>

        <List sx={{ 
          width: '100%', 
          maxWidth: 600,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1
        }}>
          {events.map((event, index) => (
            <ListItem 
              key={event}
              divider={index !== events.length - 1}
              sx={{ 
                py: 2,
                '&:hover': {
                  bgcolor: 'action.hover'
                }
              }}
            >
              <ListItemText 
                primary={event} 
                primaryTypographyProps={{
                  fontSize: '1.2rem',
                  fontWeight: 'medium'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default SpecialEvents; 