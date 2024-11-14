import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import serviceimg from "../assets/images/services.png";
import chooseus from "../assets/images/plan.png";
import transport from "../assets/images/transport.png";

// ExampleCarouselImage component simulating Bootstrap carousel image component
const ExampleCarouselImage = ({ text }) => (
  <Box
    sx={{
      height: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey.300',
      color: 'white',
      fontSize: 24,
      overflow: 'hidden', // Ensures image content doesn't overflow
    }}
  >
    <img
      src={text}
      alt="abc"
      style={{
        width: '100%',          // Ensure image fills width of box
        height: '100%',         // Ensure image fills height of box
        objectFit: 'cover',     // Cover the box while maintaining aspect ratio
      }}
    />
  </Box>
);

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <>
      <Box
        sx={{
          my: 4,
          overflow: 'hidden', // Prevents x-axis scrolling
          width: '100%',      // Ensures the box fits within the screen
        }}
      >
        <Slider {...settings}>
          <Box>
            <ExampleCarouselImage text={serviceimg} />
          </Box>
          <Box>
            <ExampleCarouselImage text={chooseus} />
          </Box>
          <Box>
            <ExampleCarouselImage text={transport} />
          </Box>
        </Slider>
      </Box>
    </>
  );
}

export default Carousel;
