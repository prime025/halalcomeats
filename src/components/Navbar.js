import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Container,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopAnchorEl, setDesktopAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Meats', path: '/meats' },
    { text: 'Activities', path: '/activities' },
    { text: 'Special Events', path: '/special-events' },
    { text: 'Directions', path: '/directions' },
    { text: 'Contact', path: '/contact' },
    { text: 'Privacy Policy', path: '/privacy' },
    { text: 'Terms', path: '/terms' },
  ];

  const galleryItems = [
    { text: 'The Butcher Shop', path: '/gallery/butcher-shop' },
    { text: 'The Farm', path: '/gallery/farm' },
    { text: 'The Barn', path: '/gallery/barn' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDesktopGalleryClick = (event) => {
    setDesktopAnchorEl(event.currentTarget);
  };

  const handleDesktopGalleryClose = () => {
    setDesktopAnchorEl(null);
  };

  const handleMobileGalleryClick = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileGalleryClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMobileGalleryItemClick = () => {
    handleMobileGalleryClose();
    handleDrawerToggle();
  };

  const handleDesktopGalleryItemClick = () => {
    handleDesktopGalleryClose();
  };

  const drawer = (
    <List sx={{ pt: 2 }}>
      {menuItems.map((item) => (
        <React.Fragment key={item.text}>
          <ListItem
            button
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            selected={location.pathname === item.path}
            sx={{
              py: 2,
              px: 3,
              '&.Mui-selected': {
                backgroundColor: 'rgba(136, 193, 186, 0.1)',
                '& .MuiListItemText-primary': {
                  color: 'rgb(136, 193, 186)',
                },
              },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: '#2a7f75'
              }}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
      <ListItem 
        button 
        onClick={handleMobileGalleryClick}
        sx={{
          py: 2,
          px: 3,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        }}
      >
        <ListItemText 
          primary="Gallery" 
          primaryTypographyProps={{
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#2a7f75'
          }}
        />
      </ListItem>
      <Divider />
      <Menu
        id="mobile-gallery-menu"
        anchorEl={mobileAnchorEl}
        open={Boolean(mobileAnchorEl)}
        onClose={handleMobileGalleryClose}
        sx={{
          '& .MuiPaper-root': {
            width: 280,
            maxHeight: 300,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        {galleryItems.map((item) => (
          <MenuItem 
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleMobileGalleryItemClick}
            sx={{
              py: 2,
              px: 3,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            <Typography
              sx={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: '#2a7f75'
              }}
            >
              {item.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </List>
  );

  return (
    <>
      {/* Mini Header */}
      <Box
        sx={{
          backgroundColor: 'white',
          color: 'text.primary',
          py: 1,
          px: 2,
          display: 'block',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="lg" sx={{ 
          display: 'flex', 
          justifyContent: { xs: 'center', lg: 'flex-end' }, 
          gap: 3,
          alignItems: 'center',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ fontSize: '1rem', color: 'rgb(136, 193, 186)' }} />
            <Typography variant="body2">
              1-844 HALALCO (425-2526)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon sx={{ fontSize: '1rem', color: 'rgb(136, 193, 186)' }} />
            <Typography variant="body2">
              Tue to Sun: 9AM - 5PM
            </Typography>
          </Box>
        </Container>
      </Box>

      <AppBar 
        position="sticky" 
        color="inherit"
        elevation={0}
        sx={{
          padding: 0,
          marginBottom: '-64px',
          overflow: 'visible',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ 
          position: 'relative',
          padding: { xs: '0 16px', sm: '0 24px', md: '0 32px', lg: '0 40px' },
          minHeight: '64px !important',
          overflow: 'visible',
          display: 'flex',
          justifyContent: { xs: 'space-between', md: 'center' },
          alignItems: 'center',
        }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              marginRight: { xs: 0, md: 4 },
              zIndex: 2,
            }}
          >
            <Box sx={{ 
              display: { xs: 'none', md: 'block' },
              '& img': {
                height: { md: '90px', lg: '120px' },
                transition: 'height 0.3s ease',
              },
            }}>
              <img
                src={logo}
                alt="Halalco Meats Logo"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                display: { xs: 'block', md: 'none' },
                color: 'rgb(136, 193, 186)',
                fontWeight: 600,
                fontFamily: '"Poppins", sans-serif',
                letterSpacing: '0.5px',
                fontSize: '1.25rem',
              }}
            >
              Halalco Meats
            </Typography>
          </Box>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {menuItems.slice(0, 4).map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'rgb(136, 193, 186)' : 'text.primary',
                    fontSize: '1.05rem',
                    whiteSpace: 'normal',
                    textAlign: 'center',
                    minWidth: 'auto',
                    padding: '6px 8px',
                    '&:hover': {
                      color: 'rgb(136, 193, 186)',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                onClick={handleDesktopGalleryClick}
                sx={{
                  color: galleryItems.some(item => location.pathname === item.path) 
                    ? 'rgb(136, 193, 186)' 
                    : 'text.primary',
                  fontSize: '1.05rem',
                  whiteSpace: 'normal',
                  textAlign: 'center',
                  minWidth: 'auto',
                  padding: '6px 8px',
                  '&:hover': {
                    color: 'rgb(136, 193, 186)',
                    backgroundColor: 'transparent',
                  },
                }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Gallery
              </Button>
              <Menu
                id="desktop-gallery-menu"
                anchorEl={desktopAnchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(desktopAnchorEl)}
                onClose={handleDesktopGalleryClose}
              >
                {galleryItems.map((item) => (
                  <MenuItem 
                    key={item.text} 
                    onClick={handleDesktopGalleryItemClick}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      py: 2,
                      px: 3,
                      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                      '&:last-child': {
                        borderBottom: 'none'
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                      }
                    }}
                  >
                    <Typography 
                      textAlign="center" 
                      sx={{ 
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: 'text.primary'
                      }}
                    >
                      {item.text}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              {menuItems.slice(4).map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'rgb(136, 193, 186)' : 'text.primary',
                    fontSize: '1.05rem',
                    whiteSpace: 'normal',
                    textAlign: 'center',
                    minWidth: 'auto',
                    padding: '6px 8px',
                    '&:hover': {
                      color: 'rgb(136, 193, 186)',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            animation: 'slideIn 0.3s ease-out'
          },
          '@keyframes slideIn': {
            '0%': {
              transform: 'translateX(100%)',
              opacity: 0
            },
            '100%': {
              transform: 'translateX(0)',
              opacity: 1
            }
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 