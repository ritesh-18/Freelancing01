import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#002A28', // Dark background color
  color: 'white',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: '../assets/images/services01.jpeg', // Replace with actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    clipPath: 'ellipse(100% 75% at 100% 50%)',
  },
});

const ServiceSection = () => {
  return (
    <Box sx={{ display: 'flex', height: '500px' }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <ContentContainer>
            <Typography variant="h4" gutterBottom>
              SERVICES
            </Typography>
            <Typography variant="body1" paragraph>
              Our Services Being a leading provider of logistics solutions across India, we’ve an immense portfolio
            </Typography>
            <Button variant="outlined" sx={{ color: '#FFB100', borderColor: '#FFB100' }}>
              Read More
            </Button>
          </ContentContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceSection;
