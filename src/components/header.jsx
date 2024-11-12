import React from "react";
import Box from "@mui/material/Box";
import Logos from '../assets/Logos/NameLogo.webp'

const Header = ({ children }) => {
  return (
    
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box component="h1" sx={{ fontWeight: "bold" }}>
        <Box>
          <img src={Logos} alt= 'page logo' style= {{ height: '40px', width: '30px'}}/>
        Cyrus Esfahani
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Header;
