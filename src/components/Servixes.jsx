import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BuildIcon from '@mui/icons-material/Build';
import { styled } from '@mui/material/styles';

const services = [
  {
    title: 'Transportation',
    icon: <LocalShippingIcon sx={{ fontSize: 20 }} />,
    imageUrl: 'https://suryalogistics.in/wp-content/uploads/2023/03/road-freight-services.png',
  },
  {
    title: 'Warehousing',
    icon: <WarehouseIcon sx={{ fontSize: 20 }} />,
    imageUrl: 'https://suryalogistics.in/wp-content/uploads/2023/03/warehouse.png',
  },
  {
    title: 'Value Added Services',
    icon: <BuildIcon sx={{ fontSize: 20 }} />,
    imageUrl: 'https://suryalogistics.in/wp-content/uploads/2023/03/vas.png',
  },
];

const ServiceCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '350px',
  height: '300px',
  margin: '10px',
  overflow: 'hidden',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('lg')]: {
    width: '280px', // Adjust width for large tablets and small devices
    height: '250px', // Adjust height for large tablets
  },
  [theme.breakpoints.down('md')]: {
    width: '250px', // Adjust width for smaller devices
    height: '220px', // Adjust height for smaller devices
  },
  [theme.breakpoints.down('sm')]: {
    width: '200px', // Adjust width for phones
    height: '180px', // Adjust height for phones
  },
}));

const OverlayBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  boxShadow: theme.shadows[3],
  borderRadius: '8px',
  transition: 'all 0.3s ease-in-out',
  width: '90%',
  justifyContent: 'center',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateX(-50%) scale(1.05)',
  },
}));

const ServiceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  marginTop: '20px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const ServiceBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  const divStyle = {
    height: isHovered ? '100px' : '0',
    overflow: 'hidden',
    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
    transformOrigin: 'top',
    transition: 'transform 0.5s ease',
  };

  return (
    <ServiceContainer>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <CardMedia
            component="img"
            height="150"
            image={service.imageUrl}
            alt={service.title}
          />
          <OverlayBox>
            <Box display="flex" alignItems="center">
              {service.icon}
              <Typography variant="subtitle2" sx={{ ml: 2 }}>
                {service.title}
              </Typography>
            </Box>
            <Box
              style={divStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Surya Logistics Limited is a market leader in providing integrated solutions within road and rail cargo. Over the past years, due to our continued hard work & dedication, we have excelled ourselves in this domain.
            </Box>
          </OverlayBox>
        </ServiceCard>
      ))}
    </ServiceContainer>
  );
};

export default ServiceBox;
