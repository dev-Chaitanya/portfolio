import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <IconButton color="inherit" component={Link} href="https://www.facebook.com" target='_blank'>
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://www.linkedin.com" target='_blank'>
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://www.instagram.com" target='_blank'>
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" align="center" gutterBottom>
        © {currentYear}
      </Typography>
      <Typography variant="body2" align="center">
        Site template by Chaitanya <FavoriteIcon sx={{color:'red'}} fontSize="small" /> 
      </Typography>
    </Box>
  );
};

export default Footer;
