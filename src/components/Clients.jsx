import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import Garware from "../assets/images/clients/garware2.png";
import Hettich from "../assets/images/clients/hettiuch.png";
import Rehau from "../assets/images/clients/rehu.png";
import Mitsubishi from "../assets/images/clients/mitsubishi-electric-301x167-1.png";
import HMEL from "../assets/images/clients/HMEL-Logo.png";

const ClientComponent = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: "20px" }}>
      {/* Main Title */}
      <Typography variant="h5" gutterBottom>
        Our Clients
      </Typography>

      {/* Divider */}
      <Box sx={{ width: '60px', height: '4px', backgroundColor: '#3f51b5', margin: '8px auto' }} />

      {/* Client Logos */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', sm: 'center' }, // Center on larger screens
          alignItems: 'center',
          marginTop: 4,
          flexWrap: 'nowrap', // Prevent wrapping of client logos
          overflowX: 'auto', // Enable horizontal scrolling
          paddingBottom: '20px',
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray',
            borderRadius: '4px',
          },
        }}
      >
        {/* Client logos container */}
        {[Hettich, Garware, Rehau, HMEL, Mitsubishi].map((client, index) => (
          <Box
            key={index}
            sx={{
              width: '210px', // Constant width
              height: '170px', // Constant height
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              margin: 1,
              flexShrink: 0, // Prevent shrinking on small screens
            }}
          >
            <CardMedia
              component="img"
              height="150" // Fixed height for images
              image={client}
              alt={`Client logo ${index + 1}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ClientComponent;
