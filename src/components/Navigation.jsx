import * as React from "react";
import {
  NavLink as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import * as Scroll from "react-scroll";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // Icon for Portfolio
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Icon for Contact
import BuildIcon from "@mui/icons-material/Build"; // Icon for Projects
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

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <MenuIcon onClick={() => setOpen(true)} sx={{ color: 'white' }} />
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: isSmallScreen ? '75%' : '20%', // 75% width for small screens, 20% for larger screens
            backgroundColor: 'white',
            padding: '1.5rem',
            overflow: 'hidden',
            color: 'black',
          },
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <h3>Menu</h3>
        </div>

        {/* Navigation Items */}
        <List>
          {/* Portfolio Section - Now redirects to home and scrolls to Portfolio */}
          <ListItem button onClick={handlePortfolioClick}>
            <ListItemIcon>
              <WorkIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>

          {/* Projects Section */}
          <ListItem button>
            <ListItemIcon>
              <BuildIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <RouterLink
              to="/projects"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Projects" />
            </RouterLink>
          </ListItem>

          {/* Contact Section */}
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <RouterLink
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Contact" />
            </RouterLink>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}




