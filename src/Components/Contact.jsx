import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, Box, Typography, Avatar, Slide, Grow, Zoom } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GetAppIcon from '@mui/icons-material/GetApp'; // Import GetAppIcon for the download CV button
import HomeIcon from '@mui/icons-material/Home';
import './ContactForm.css'; // Add a CSS file for custom styles

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [inView, setInView] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setSubmitted(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
let currentRef=formRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      ref={formRef}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        p: 3,
        borderRadius: 1,
        boxShadow: 10,
        bgcolor: 'transparent',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 4, md: 0 },
          mr: { md: 4 },
          width: { xs: '100%', md: '40%' },
        }} id='Contact'
      >
        <Zoom in={inView} style={{ transitionDelay: inView ? "500ms" : "0ms" }}>
          <Avatar
            alt="Chaitanya"
            src="jack.jpg" // Replace with your image URL
            sx={{
              width: 100,
              height: 100,
              mb: 2,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
        </Zoom>
        <Typography variant="h6" sx={{ color: 'white' }}>Chaitanya</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'white' }}>
          <EmailIcon sx={{ mr: 1 }} />
          <Typography variant="body1">csai30185@gmail.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'white' }}>
          <PhoneIcon sx={{ mr: 1 }} />
          <Typography variant="body1">9834627215</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, color: 'white' }}>
          <HomeIcon sx={{ mr: 1 }} />
          <Typography variant="body1">DownTown NewYork</Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<GetAppIcon />}
          sx={{ mt: 2 }}
          onClick={() => {
            // Add functionality for downloading the CV
            window.open('/path/to/your/cv', '_blank');
          }}
        >
          Download CV
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: { xs: '100%', md: '60%' },
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: 'white', fontFamily: "'Bespoke Stencil', sans-serif" }}>
          CONTACT US
        </Typography>
        <Slide direction="down" in={!submitted} mountOnEnter unmountOnExit>
          <TextField
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            variant="filled"
            margin="normal"
            fullWidth
            required
            className="custom-input" // Add a custom class
            InputProps={{ disableUnderline: true, style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
        </Slide>
        <Slide direction="right" in={!submitted} mountOnEnter unmountOnExit>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            variant="filled"
            margin="normal"
            fullWidth
            required
            className="custom-input" // Add a custom class
            InputProps={{ disableUnderline: true, style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
        </Slide>
        <Slide direction="up" in={!submitted} mountOnEnter unmountOnExit>
          <TextField
            label="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            variant="filled"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            required
            className="custom-input" // Add a custom class
            InputProps={{ disableUnderline: true, style: { color: 'black' } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
        </Slide>
        <Grow in={!submitted} mountOnEnter unmountOnExit>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            sx={{ mt: 2 }}
          >
            Send
          </Button>
        </Grow>
        {submitted && (
          <Grow in={submitted} mountOnEnter unmountOnExit>
            <Typography variant="h6" sx={{ mt: 2, color: 'white' }}>
              Thank you for your message!
            </Typography>
          </Grow>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
