import * as React from "react";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import * as Scroll from "react-scroll";
import { List, ListItem, ListItemIcon, ListItemText, Box, IconButton } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // Icon for Portfolio
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Icon for Contact
import BuildIcon from "@mui/icons-material/Build"; // Icon for Projects
import HomeIcon from "@mui/icons-material/Home"; // Icon for Home
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Navigation() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to navigate to Home and scroll to Portfolio
  const handlePortfolioClick = async () => {
    if (path !== "/") {
      // Navigate to home first
      await navigate("/");
    }
    // After navigation, scroll to the Portfolio section
    scroller.scrollTo("portfolio", {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true,
    });
    setOpen(false); // Close the menu
  };

  // Cyan-purple gradient style
  const gradientText = {
    background: 'linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 600
  };

  // Menu item hover style
  const menuItemHoverStyle = {
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(0, 230, 246, 0.05)',
      transform: 'translateX(8px)',
    }
  };

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          color: '#00e6f6',
          '&:hover': {
            backgroundColor: 'rgba(147, 51, 234, 0.1)',
          }
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: isSmallScreen ? '75%' : '300px',
            backgroundColor: 'rgba(15, 15, 20, 0.95)',
            backgroundImage: 'linear-gradient(to bottom right, rgba(0, 230, 246, 0.05), rgba(147, 51, 234, 0.05))',
            padding: '1.5rem',
            overflow: 'hidden',
            color: 'white',
            backdropFilter: 'blur(10px)',
            boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '1rem',
          }}
        >
          <Box sx={{ ...gradientText, fontSize: '1.5rem' }}>Menu</Box>
          <IconButton 
            onClick={() => setOpen(false)}
            sx={{ 
              color: '#00e6f6',
              '&:hover': {
                backgroundColor: 'rgba(147, 51, 234, 0.1)',
                transform: 'rotate(90deg)',
              },
              transition: 'transform 0.3s ease',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation Items */}
        <List sx={{ padding: 0 }}>
          {/* Home */}
          <ListItem 
            button 
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            sx={menuItemHoverStyle}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: "#00e6f6" }} />
            </ListItemIcon>
            <ListItemText 
              primary="Home" 
              primaryTypographyProps={{ 
                sx: { 
                  color: "white", 
                  fontWeight: path === "/" ? 600 : 400 
                } 
              }} 
            />
          </ListItem>

          {/* Portfolio Section */}
          <ListItem 
            button 
            onClick={handlePortfolioClick}
            sx={menuItemHoverStyle}
          >
            <ListItemIcon>
              <WorkIcon sx={{ color: "#9333ea" }} />
            </ListItemIcon>
            <ListItemText 
              primary="Portfolio" 
              primaryTypographyProps={{ 
                sx: { color: "white" } 
              }} 
            />
          </ListItem>

          {/* Projects Section */}
          <ListItem 
            button
            sx={menuItemHoverStyle}
            onClick={() => {
              navigate("/projects");
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <BuildIcon sx={{ color: "#00e6f6" }} />
            </ListItemIcon>
            <ListItemText 
              primary="Projects" 
              primaryTypographyProps={{ 
                sx: { 
                  color: "white", 
                  fontWeight: path === "/projects" ? 600 : 400 
                } 
              }} 
            />
          </ListItem>

          {/* Contact Section */}
          <ListItem 
            button
            sx={menuItemHoverStyle}
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <ContactMailIcon sx={{ color: "#9333ea" }} />
            </ListItemIcon>
            <ListItemText 
              primary="Contact" 
              primaryTypographyProps={{ 
                sx: { 
                  color: "white", 
                  fontWeight: path === "/contact" ? 600 : 400 
                } 
              }} 
            />
          </ListItem>
        </List>

        {/* Footer in menu */}
        <Box
          sx={{
            marginTop: 'auto',
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '2rem',
          }}
        >
          <Box sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
            &copy; {new Date().getFullYear()} Cyrus Esfahani
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}