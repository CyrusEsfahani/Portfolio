import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import { keyframes } from "@emotion/react";
import emailjs from "@emailjs/browser";

// Breathing animation
const breatheAnimation = keyframes`
  0%, 100% { background-position: 0% 50%; opacity: 0.7; }
  50% { background-position: 100% 50%; opacity: 1; }
`;

export default function Contact() {
  const [formState, setFormState] = useState({
    yourName: "",
    email: "",
    subject: "", // Added subject field
    message: "",
  });

  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const form = useRef();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_jzmq1jl",
        "template_7mxlo8d",
        form.current,
        "zLknAdr3wZXXK8V0z"
      )
      .then(() => {
        setUserMessage("Thank you! Your message has been sent.");
        setFormState({ yourName: "", email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        setUserMessage("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  // Gradient text style
  const gradientText = {
    background: 'linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: { xs: "20px", md: "60px" },
        backgroundColor: "#0f0f14", // Darker background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, 
            rgba(0, 230, 246, 0.03) 0%, 
            rgba(147, 51, 234, 0.03) 50%, 
            rgba(0, 230, 246, 0.03) 100%)`,
          backgroundSize: "400% 400%",
          animation: `${breatheAnimation} 15s ease infinite`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} justifyContent="center">
          {/* Left column with info */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "10px",
                ...gradientText,
                fontSize: { xs: "2.5rem", md: "3rem" }
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "30px",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              Have a project in mind or want to discuss a collaboration opportunity? I'd love to hear from you!
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mt: 6 }}>
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                mb: 4,
                p: 2,
                borderRadius: "12px",
                background: "rgba(0, 230, 246, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(0, 230, 246, 0.1)",
                  transform: "translateY(-3px)",
                }
              }}>
                <EmailIcon sx={{ 
                  color: "#00e6f6", 
                  fontSize: 36, 
                  mr: 2,
                  filter: "drop-shadow(0 0 8px rgba(0, 230, 246, 0.5))",
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 600 }}>
                    Email
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    esfahani.cyrus@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                mb: 4,
                p: 2,
                borderRadius: "12px",
                background: "rgba(147, 51, 234, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(147, 51, 234, 0.1)",
                  transform: "translateY(-3px)",
                }
              }}>
                <LinkedInIcon sx={{ 
                  color: "#9333ea", 
                  fontSize: 36, 
                  mr: 2,
                  filter: "drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))",
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 600 }}>
                    LinkedIn
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Connect with me
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ 
                display: "flex", 
                alignItems: "center",
                p: 2,
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-3px)",
                }
              }}>
                <GitHubIcon sx={{ 
                  color: "#ffffff", 
                  fontSize: 36, 
                  mr: 2 
                }} />
                <Box>
                  <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 600 }}>
                    GitHub
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    View my projects
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right column with form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                backgroundColor: "rgba(20, 20, 30, 0.6)",
                backdropFilter: "blur(10px)",
                padding: { xs: "30px", md: "40px" },
                borderRadius: "16px",
                boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Form glowing effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `
                    radial-gradient(circle at 30% 40%, rgba(0, 230, 246, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)
                  `,
                  opacity: 0.8,
                  zIndex: 0,
                  animation: "formGlow 8s infinite alternate ease-in-out",
                  "@keyframes formGlow": {
                    "0%": { opacity: 0.4, transform: "scale(0.98)" },
                    "100%": { opacity: 0.8, transform: "scale(1.02)" },
                  },
                }}
              />

              <Typography 
                variant="h5" 
                sx={{ 
                  marginBottom: "30px", 
                  position: "relative", 
                  zIndex: 1, 
                  color: "white", 
                  fontWeight: 600 
                }}
              >
                Send Me a Message
              </Typography>

              <Box component="form" ref={form} onSubmit={sendEmail} sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={3}>
                  {/* Name Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="yourName"
                      label="Your Name"
                      value={formState.yourName}
                      onChange={handleChange}
                      fullWidth
                      required
                      variant="outlined"
                      InputProps={{
                        sx: {
                          color: "white",
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#00e6f6",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#00e6f6",
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: { 
                          color: "rgba(255, 255, 255, 0.7)",
                          "&.Mui-focused": {
                            color: "#00e6f6",
                          },
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  
                  {/* Email Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      label="Email Address"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      fullWidth
                      required
                      variant="outlined"
                      InputProps={{
                        sx: {
                          color: "white",
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#9333ea",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#9333ea",
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: { 
                          color: "rgba(255, 255, 255, 0.7)",
                          "&.Mui-focused": {
                            color: "#9333ea",
                          },
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  
                  {/* Subject Field */}
                  <Grid item xs={12}>
                    <TextField
                      name="subject"
                      label="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        sx: {
                          color: "white",
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#00e6f6",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#00e6f6",
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: { 
                          color: "rgba(255, 255, 255, 0.7)",
                          "&.Mui-focused": {
                            color: "#00e6f6",
                          },
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
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
                      rows={5}
                      variant="outlined"
                      InputProps={{
                        sx: {
                          color: "white",
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#9333ea",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#9333ea",
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: { 
                          color: "rgba(255, 255, 255, 0.7)",
                          "&.Mui-focused": {
                            color: "#9333ea",
                          },
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  endIcon={<SendIcon />}
                  sx={{
                    marginTop: "30px",
                    padding: "12px 24px",
                    background: "linear-gradient(135deg, #00e6f6 0%, #9333ea 100%)",
                    color: "white",
                    fontWeight: 600,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "30px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                      transform: "translateY(-3px)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                      transition: "0.5s",
                    },
                    "&:hover::before": {
                      left: "100%",
                    },
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Box>

              {/* User Message */}
              {userMessage && (
                <Typography
                  sx={{
                    marginTop: "20px",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: 500,
                    backgroundColor: userMessage.includes("Thank you") 
                      ? "rgba(0, 230, 246, 0.1)" 
                      : "rgba(255, 70, 70, 0.1)",
                    color: userMessage.includes("Thank you") 
                      ? "#00e6f6" 
                      : "#ff4646",
                  }}
                >
                  {userMessage}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


                  