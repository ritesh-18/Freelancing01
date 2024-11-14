import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icon from "../assets/images/Icon.png"
const Nav2Bar = () => {
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAboutAnchorEl(null);
    setServicesAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{
            display: "flex",
            justifyContent:"space-around",
            marginTop:"15px"
        }}>
          <div>
            <Box display="flex" alignItems="center" flexGrow={1}>
              <img
                src={Icon}
                alt="Surya Logistics Logo"
                style={{ height: 80, marginLeft: 20 }}
              />
            </Box>
          </div>
          {/* git config --global user.email "you@example.com"
          git config --global user.name "Your Name"fig */}
          <div>
            <Button color="inherit">Home</Button>

            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
              onClick={handleAboutClick}
            >
              About Us
            </Button>
            <Menu
              anchorEl={aboutAnchorEl}
              open={Boolean(aboutAnchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Our Story</MenuItem>
              <MenuItem onClick={handleClose}>Our Team</MenuItem>
            </Menu>

            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
              onClick={handleServicesClick}
            >
              Services
            </Button>
            <Menu
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logistics</MenuItem>
              <MenuItem onClick={handleClose}>Transportation</MenuItem>
              <MenuItem onClick={handleClose}>Warehousing</MenuItem>
            </Menu>

            <Button color="inherit">Our Tech</Button>
            <Button color="inherit">Surya Eco</Button>
            <Button color="inherit">Career</Button>
            <Button color="inherit">Contact Us</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav2Bar;
