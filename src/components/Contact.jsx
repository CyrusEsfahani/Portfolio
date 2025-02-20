import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formState, setFormState] = useState({
    yourName: "",
    email: "",
    message: "",
  });

  const [userMessage, setUserMessage] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzmq1jl",
        "template_7mxlo8d",
        form.current,
        "zLknAdr3wZXXK8V0z"
      )
      .then(() => {
        setUserMessage("Thank you! Your message has been sent.");
        setFormState({ yourName: "", email: "", message: "" });
      })
      .catch(() => {
        setUserMessage("Something went wrong. Please try again.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#1a1a1a", // Dark background color
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#ffffff",
          fontWeight: "bold",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Let's achieve the impossible together 
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#aaaaaa",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
       If you need help or have some questions, I'll be there ready and happy to help.

      </Typography>

      {/* Form Card */}
      <Box
        sx={{
          width: { xs: "90%", sm: "75%", md: "50%" },
          backgroundColor: "#2a2a2a", // Dark gray card background
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box component="form" ref={form} onSubmit={sendEmail}>
          <Grid container spacing={3}>
            {/* Name Field */}
            <Grid item xs={12}>
              <TextField
                name="yourName"
                label="Your Name"
                value={formState.yourName}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  style: {
                    backgroundColor: "#333333",
                    color: "#ffffff",
                    borderRadius: "5px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#aaaaaa" },
                }}
              />
            </Grid>
            {/* Email Field */}
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email Address"
                value={formState.email}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  style: {
                    backgroundColor: "#333333",
                    color: "#ffffff",
                    borderRadius: "5px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#aaaaaa" },
                }}
              />
            </Grid>
            {/* Message Field */}
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Message"
                value={formState.message}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                InputProps={{
                  style: {
                    backgroundColor: "#333333",
                    color: "#ffffff",
                    borderRadius: "5px",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#aaaaaa" },
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#0ea5e9",
              color: "#ffffff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00e6f6",
              },
            }}
          >
            Send Message
          </Button>
        </Box>

        {/* User Message */}
        {userMessage && (
          <Typography
            sx={{
              marginTop: "20px",
              color: userMessage.includes("Thank you") ? "green" : "red",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {userMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
}


                  