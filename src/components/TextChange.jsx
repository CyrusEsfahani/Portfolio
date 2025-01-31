import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TextChange = () => {
  const texts = ["Greetings!", "Welcome To My Portfolio!"]; // Texts to display
  const [currentText, setCurrentText] = useState(""); // Current displayed text
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current text
  const [isTyping, setIsTyping] = useState(true); // Typing or deleting phase
  const [showCursor, setShowCursor] = useState(true); // Controls cursor visibility

  useEffect(() => {
    const typingSpeed = 100; // Speed of typing (in milliseconds)
    const deletingSpeed = 50; // Speed of deleting (in milliseconds)
    const pauseBetweenTexts = 1000; // Pause before starting the next text (in milliseconds)
    const cursorBlinkSpeed = 500; // Speed of cursor blink (in milliseconds)

    // Blinking cursor effect
    const cursorIntervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    // Typing and deleting logic
    const timeoutId = setTimeout(() => {
      if (isTyping) {
        // Typing phase
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText((prev) => prev + texts[currentIndex][prev.length]);
        } else {
          // Switch to deleting phase after a short pause
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

    // Cleanup intervals and timeouts
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
        alignItems: "flex-start", // Align text to the left
        justifyContent: "center",
        textAlign: "left",
        mt: 2,
      }}
    >
      <Typography
        variant="h5" // Smaller font size
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400, // Lighter font weight
          color: "white", // White text color
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }, // Responsive font size
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            right: "-8px",
            width: "2px",
            height: "100%",
            backgroundColor: "white", // White cursor color
            opacity: showCursor ? 1 : 0, // Blinking effect
            transition: "opacity 0.3s ease",
          },
        }}
      >
        {currentText}
      </Typography>
    </Box>
  );
};

export default TextChange;