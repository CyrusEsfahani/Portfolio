// Header.jsx
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";

// Glow animation for the logo
const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 230, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 230, 246, 0.8), 0 0 30px rgba(147, 51, 234, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 230, 246, 0.5);
  }
`;

// Shimmer animation for the text
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Header = ({ children }) => {
  const theme = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Track scroll position for header transparency effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic logo glow style based on hover and scroll
  const logoGlowStyle = {
    animation: `${glowPulse} ${isHovered ? '1.5s' : '3s'} infinite ease-in-out`,
    boxShadow: isHovered 
      ? '0 0 15px rgba(0, 230, 246, 0.8), 0 0 25px rgba(147, 51, 234, 0.4)'
      : '0 0 10px rgba(0, 230, 246, 0.5)',
  };

  // Enhanced gradient text style with shimmer effect
  const gradientStyle = {
    background: isHovered
      ? 'linear-gradient(135deg, #00e6f6 0%, #9333ea 40%, #00e6f6 80%, #9333ea 100%)'
      : 'linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)',
    backgroundSize: isHovered ? '200% auto' : '100% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: isHovered ? `${shimmer} 2s linear infinite` : 'none',
  };

  // Calculate header background opacity based on scroll
  const headerOpacity = Math.min(scrollPosition / 200, 0.9);

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: `rgba(15, 15, 20, ${headerOpacity})`, // Dynamic based on scroll
        backdropFilter: scrollPosition > 20 ? 'blur(10px)' : 'none',
        position: "sticky",
        top: 0,
        zIndex: 1100,
        transition: "all 0.3s ease",
        borderBottom: scrollPosition > 20 
          ? '1px solid rgba(0, 230, 246, 0.15)' 
          : '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          textDecoration: "none",
          "&:hover": {
            "& #logo-c": {
              transform: "rotate(-15deg) scale(1.1)",
            },
            "& .name-text": {
              color: theme.palette.common.white,
            },
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced C Logo with dynamic glow */}
        <Box
          id="logo-c"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "2px solid",
            borderColor: isHovered ? 'rgba(147, 51, 234, 0.8)' : '#00e6f6',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backgroundColor: 'rgba(15, 15, 20, 0.9)',
            color: isHovered ? '#00e6f6' : '#00e6f6',
            fontSize: "1.5rem",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            position: "relative",
            overflow: "hidden",
            ...logoGlowStyle,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: isHovered 
                ? 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(0, 230, 246, 0.1) 50%, transparent 70%)' 
                : 'none',
              transform: "rotate(45deg)",
              transition: "all 0.6s ease",
              opacity: isHovered ? 1 : 0,
            },
          }}
        >
          C
        </Box>

        {/* Full name with enhanced gradient effect */}
        <Typography
          variant="h6"
          component="h1"
          className="name-text"
          sx={{
            fontWeight: 600,
            fontSize: "1.25rem",
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s ease",
            ...gradientStyle,
            textShadow: isHovered ? '0 0 10px rgba(0, 230, 246, 0.2)' : 'none',
          }}
        >
          Cyrus Esfahani
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Header;