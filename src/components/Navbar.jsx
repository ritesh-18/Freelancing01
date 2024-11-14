import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  return (
    <Box bgcolor="black" color="white" py={1} px={2}>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Typography
          variant="body2"
          sx={{ paddingLeft: "15px", borderRight: "1px solid white", pr: 2 }}
        >
          Flat No. 1791 FF M/G, Sec-6 Near Subhash Chowk Dharuhera (Hr) 123106
        </Typography>

        <Stack direction="row" spacing={4}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ borderRight: "1px solid white", pr: 2 }}
            spacing={1}
          >
            <PhoneIcon style={{ color: "gold" }} />
            <a href="tel:+919953642957,+919213388971" style={{ color: 'inherit', textDecoration: 'none' }}>
                9899444483
              </a>
          </Stack>

          <Stack
  direction="row"
  alignItems="center"
  sx={{ borderRight: "1px solid white", pr: 2 }}
  spacing={1}
>
  <EmailIcon style={{ color: "gold" }} />
  <a
    href="mailto:suryalogistics@suryalogisticsdhr.com"
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    suryalogistics@suryalogisticsdhr.com
  </a>
</Stack>

        </Stack>

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
      </Stack>
    </Box>
  );
};

export default Navbar;
