import React from 'react';
import { Box, Typography , CardMedia } from '@mui/material';
import Garware from "../assets/images/clients/garware2.png"
import Hettich from"../assets/images/clients/hettiuch.png"
import Rehau from"../assets/images/clients/rehu.png"
import Mitsubishi from"../assets/images/clients/mitsubishi-electric-301x167-1.png"
import HMEL from"../assets/images/clients/HMEL-Logo.png"

const ClientComponent = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: "20px",  }}>
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
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 4,
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ display:"flex"}}>
        {[Hettich, Garware, Rehau, HMEL, Mitsubishi].map((client, index) => (
          <Box
            key={index}
            sx={{
              width: '210px',
              height: '170px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              margin: 1,
            }}
          >
            <CardMedia
            component="img"
            height="150"
            image={client}
            alt={"abcd"}
          />
          </Box>
        ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientComponent;
