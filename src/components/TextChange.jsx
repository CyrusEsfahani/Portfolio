import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const TextChange = () => {
  // Text phrases as specified
  const texts = [
    "Hello there!",
    "Welcome to my portofolio!",
    "I'm a Full stack Developer!",
    "specialized in Javascript, React, Typescript and more...",
    "Building modern web applications!",
    
  ];
  
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Simple timing values that work well
    const typingSpeed = 100; // Slower for better visibility
    const deletingSpeed = 50; 
    const pauseBetweenTexts = 1000;
    const cursorBlinkSpeed = 500;

    // Cursor blinking effect
    const cursorIntervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    // Classic typing and deleting logic that works reliably
    const timeoutId = setTimeout(() => {
      if (isTyping) {
        // Typing phase
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText((prev) => prev + texts[currentIndex][prev.length]);
        } else {
          // Switch to deleting phase after pause
          setTimeout(() => setIsTyping(false), pauseBetweenTexts);
        }
      } else {
        // Deleting phase
        if (currentText.length > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
        } else {
          // Switch to the next text and start typing again
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }
      }
    }, isTyping ? typingSpeed : deletingSpeed);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorIntervalId);
    };
  }, [currentText, currentIndex, isTyping, texts]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: { xs: "80px", sm: "100px" },
        mb: { xs: 3, sm: 5 },
        mt: { xs: 5, sm: 8 },
        px: { xs: 2, sm: 0 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: { 
            xs: "1.5rem", 
            sm: "1.8rem", 
            md: "2.2rem" 
          },
          lineHeight: 1.3,
          position: "relative",
          background: "linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 15px rgba(0, 230, 246, 0.15)",
          whiteSpace: { xs: "normal", sm: "nowrap" },
          maxWidth: "100%",
          "&::after": {
            content: '""',
            position: "absolute",
            right: "-4px",
            top: "10%",
            width: "3px",
            height: "80%",
            background: "linear-gradient(to bottom, #00e6f6, #9333ea)",
            opacity: showCursor ? 1 : 0,
            transition: "opacity 0.3s ease",
            borderRadius: "2px",
          },
        }}
      >
        {currentText}
      </Typography>
    </Box>
  );
};

export default TextChange;