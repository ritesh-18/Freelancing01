// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Menu,
//   MenuItem,
//   Box,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Icon from "../assets/images/Icon.png"
// const Nav2Bar = () => {
//   const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
//   const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

//   const handleAboutClick = (event) => {
//     setAboutAnchorEl(event.currentTarget);
//   };

//   const handleServicesClick = (event) => {
//     setServicesAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAboutAnchorEl(null);
//     setServicesAnchorEl(null);
//   };

//   return (
//     <div>
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar sx={{
//             display: "flex",
//             justifyContent:"space-around",
//             marginTop:"15px"
//         }}>
//           <div>
//             <Box display="flex" alignItems="center" flexGrow={1}>
//               <img
//                 src={Icon}
//                 alt="Surya Logistics Logo"
//                 style={{ height: 80, marginLeft: 20 }}
//               />
//             </Box>
//           </div>
//           {/* git config --global user.email "you@example.com"
//           git config --global user.name "Your Name"fig */}
//           <div>
//             <Button color="inherit">Home</Button>

//             <Button
//               color="inherit"
//               endIcon={<ExpandMoreIcon />}
//               onClick={handleAboutClick}
//             >
//               About Us
//             </Button>
//             <Menu
//               anchorEl={aboutAnchorEl}
//               open={Boolean(aboutAnchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Our Story</MenuItem>
//               <MenuItem onClick={handleClose}>Our Team</MenuItem>
//             </Menu>

//             <Button
//               color="inherit"
//               endIcon={<ExpandMoreIcon />}
//               onClick={handleServicesClick}
//             >
//               Services
//             </Button>
//             <Menu
//               anchorEl={servicesAnchorEl}
//               open={Boolean(servicesAnchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Logistics</MenuItem>
//               <MenuItem onClick={handleClose}>Transportation</MenuItem>
//               <MenuItem onClick={handleClose}>Warehousing</MenuItem>
//             </Menu>

//             <Button color="inherit">Our Tech</Button>
//             <Button color="inherit">Surya Eco</Button>
//             <Button color="inherit">Career</Button>
//             <Button color="inherit">Contact Us</Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "../assets/images/Icon.png";

const Nav2Bar = () => {
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAboutClick = (event) => setAboutAnchorEl(event.currentTarget);
  const handleServicesClick = (event) =>
    setServicesAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAboutAnchorEl(null);
    setServicesAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "space-around" },
            marginTop: "15px",
          }}
        >
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <img
              src={Icon} // Replace with Icon
              alt="Surya Logistics Logo"
              style={{ height: 80, marginLeft: { xs: 5, sm: 20} }}
            />
          </Box>

          {/* Navigation for Larger Screens */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
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
          </Box>

          {/* Hamburger Menu for Smaller Screens */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              aria-label="menu"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Smaller Screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
            Menu
          </Typography>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Our Tech" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Surya Eco" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Career" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Nav2Bar;

// export default Nav2Bar;
