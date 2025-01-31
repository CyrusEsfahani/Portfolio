import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "transparent", // Transparent background for modern look
        position: "sticky",
        top: 0,
        zIndex: 1100,
        transition: "all 0.3s ease",
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          textDecoration: "none",
          "&:hover": {
            "& #logo-c": {
              transform: "rotate(-15deg) scale(1.1)", // Your original hover effect
            },
            "& .name-text": {
              color: theme.palette.common.white,
            },
          },
        }}
      >
        {/* C Logo (Your Original Design) */}
        <Box
          id="logo-c"
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "2px solid #00e6f6", // Your original border color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            color: "#00e6f6", // Your original text color
            fontSize: "1.5rem",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          C
        </Box>

        <Box
          component="h1"
          className="name-text"
          sx={{
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "rgba(255, 255, 255, 0.9)",
            letterSpacing: "0.05em",
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            transition: "color 0.3s ease",
          }}
        >
          Esfahani
        </Box>
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