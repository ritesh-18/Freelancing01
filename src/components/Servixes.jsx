import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BuildIcon from '@mui/icons-material/Build';
import { styled } from '@mui/material/styles';

const services = [
  {
    title: 'Transportation',
    icon: <LocalShippingIcon sx={{ fontSize: 30 }} />,
    imageUrl: 'https://suryalogistics.in/wp-content/uploads/2023/03/road-freight-services.png', // Replace with actual image URL
  },
  {
    title: 'Warehousing',
    icon: <WarehouseIcon sx={{ fontSize: 30 }} />,
    imageUrl: 'https://suryalogistics.in/wp-content/uploads/2023/03/warehouse.png', // Replace with actual image URL
  },
  {
    title: 'Value Added Services',
    icon: <BuildIcon sx={{ fontSize: 30 }} />,
    imageUrl: 'https://suryalogistics.in/wp-content/uploads/2023/03/vas.png', // Replace with actual image URL
  },
];

const ServiceCard = styled(Card)({
  position: 'relative',
  width: '350px',
  height: '300px',
  margin: '10px',
  overflow: 'hidden',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
});








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
  '&:hover': {
    transform: 'translateX(-50%) scale(1.05)',
  },
}));


const ServiceContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  marginTop: '20px',
  
});

const ServiceBox = () => {

  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the div
  const divStyle = {
    height: isHovered ? '200px' : '0',
    overflow: 'hidden',
    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
    transformOrigin: 'top',
    transition: 'transform 0.5s ease',
  };
  // const divStyle = {
  //   height: isHovered ? 'auto' : '0',                // Allow height to grow only downward
  //   overflow: 'hidden',                              // Hide content when collapsed
  //   transition: 'height 0.5s ease',                  // Smooth transition for height change
  //   paddingBottom: isHovered ? '10px' : '0',         // Padding for space at the bottom
  // };

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
     <OverlayBox style={{display:"flex" , flexDirection:"column"}}>
     <div style={{display:"flex"}}> {service.icon}
       
       <Typography variant="subtitle1" sx={{ ml: 2 }}>
         {service.title}
       </Typography></div>
       <div style={divStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
       Surya Logistics Limited is a market leader in providing integrated solutions within road and rail cargo. Over the past years, due to our continued hard work & dedication, we have excelled ourselves in this domain.
       </div>
      
     
     </OverlayBox>
   </ServiceCard>
      ))}
    </ServiceContainer>
    
  );
};

export default ServiceBox;
