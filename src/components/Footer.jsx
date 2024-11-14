import React from 'react';
import { Box, Container, Grid, Link, Typography, TextField, Button , Stack , IconButton} from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";




const Layer03=()=>{
  return(<>
  <Box
      sx={{
        textAlign: 'center',
       
        bgcolor: '#FCB90F',
        color: 'black',
        // width: '100%',
        py: 4, // Adds padding on top and bottom
      }}
    >
      <Typography variant="body2">
        © 2023 Surya Logistics. All rights reserved | Designed & Developed By Ritesh
      </Typography>
    </Box>
  </>)
}


const Layer02 = () => {
  return (<>
    <Box
      sx={{
        bgcolor: '#333',
        background: '#374A5E',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: 4,
        px: 2,
        mt:3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              About Surya Logistics
            </Typography>
            <Typography variant="body2" paragraph>
              Established in 2013, Surya Logistics is an Integrated Logistics solutions provider.
            </Typography>
            <Link href="#" color="inherit">
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Know more Surya Logistics
              </Button>
            </Link>
          </Grid>
    
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              Useful Links
            </Typography>
            <Typography variant="body2" paragraph>
            Flat No. 1791 FF M/G, Sec-6 Near Subhash Chowk Dharuhera (Hr) 123106
            </Typography>
            <Typography variant="body2">
              <a href="tel:+919953642957,+919213388971" style={{ color: 'inherit', textDecoration: 'none' }}>
                9899444483
              </a>
            </Typography>
            <Link href="mailto:suryalogistics@suryalogisticsdhr.com" color="inherit" underline="hover" sx={{ display: 'block', mt: 1 }}>
            suryalogistics@suryalogisticsdhr.com
            </Link>
          </Grid>
    
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              Subscribe Now
            </Typography>
            <Typography variant="body2" paragraph>
              JOIN OUR MAIL LIST FOR MORE UPDATES
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <TextField
                id="email"
                label="Your Email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ mr: 2, bgcolor: 'white', borderRadius: 1 }}
              />
              <Button variant="contained" color="primary" size="small">
                SUBSCRIBE NOW!
              </Button>
            </Box>
            <Box sx={{ display: 'flex', mt: 3 }}>
              {/* {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  style={{ marginRight: index < 3 ? 10 : 0 }}
                >
                  <img src={`/path/to/${social}.svg`} alt={social} style={{ width: 30, height: 30 }} />
                </a>
              ))} */}
              <Stack direction="row" spacing={1}>
          <IconButton aria-label="Facebook" style={{ color: "gold" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="Instagram" style={{ color: "gold" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="Twitter" style={{ color: "gold" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn" style={{ color: "gold" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    
      {/* <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          py: 2,
          bgcolor: '#FCB90F',
          color: 'black',
        }}
      >
        <Typography variant="body2">
          © 2023 Surya Logistics. All rights reserved | Designed & Developed By Ritesh
        </Typography>
      </Box> */}
    </Box>
    </>
    
  );
};



const Footer=()=>{
  return(
    <>
    <Layer02/>
    <Layer03/>
    </>
  )
}

export default Footer;