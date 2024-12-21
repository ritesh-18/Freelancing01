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
    <Box
      bgcolor="black"
      color="white"
      py={2}
      px={2}
      sx={{
        overflowX: "hidden", // Prevent horizontal overflow
        overflowY: "hidden", // Prevent vertical overflow
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }} // Column for smaller devices, row for larger screens
        justifyContent={{ xs: "center", lg: "space-around" }}
        alignItems="center"
        spacing={2}
        sx={{
          textAlign: "center", // Default center alignment
          flexWrap: "wrap", // Ensure items wrap on smaller screens
        }}
      >
        {/* Address Section */}
        <Typography
          variant="body2"
          sx={{
            paddingLeft: { lg: "15px" },
            borderRight: { lg: "1px solid white" },
            pr: { lg: 2 },
            mb: { xs: 2, lg: 0 },
            wordBreak: "break-word", // Break words if they overflow on smaller screens
            maxWidth: "100%", // Prevent text from overflowing
            fontSize: { xs: "0.75rem", sm: "0.875rem", lg: "1rem" }, // Responsive font size
          }}
        >
          Flat No. 1791 FF M/G, Sec-6 Near Subhash Chowk Dharuhera (Hr) 123106
        </Typography>

        {/* Contact Section */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={2}
          alignItems="center"
          sx={{
            overflowX: "hidden", // Prevent horizontal overflow
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              borderRight: { lg: "1px solid white" },
              pr: { lg: 2 },
            }}
            spacing={1}
          >
            <PhoneIcon style={{ color: "gold" }} />
            <a
              href="tel:+919953642957,+919213388971"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              9899444483
            </a>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            sx={{
              borderRight: { lg: "1px solid white" },
              pr: { lg: 2 },
            }}
            spacing={1}
          >
            <EmailIcon style={{ color: "gold" }} />
            <a
              href="mailto:suryalogistics@suryalogisticsdhr.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              suryalogistics@suryalogisticsdhr.com
            </a>
          </Stack>
        </Stack>

        {/* Social Media Icons */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: { xs: 2, lg: 0 }, overflowX: "hidden" }} // Prevent overflow in horizontal direction
        >
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
