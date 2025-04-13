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
    subject: "",
    message: "",
  });

  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
        justifyContent: "flex-start", // Changed to flex-start for better mobile layout
        minHeight: "100vh",
        padding: { xs: "16px", sm: "20px", md: "60px" }, // Reduced padding on mobile
        paddingTop: { xs: "30px", sm: "40px", md: "60px" }, // Ensure enough top spacing
        paddingBottom: { xs: "100px", sm: "120px" }, // Extra bottom padding
        backgroundColor: "#0f0f14",
        position: "relative",
        overflow: "hidden",
        marginBottom: "-1px", // Ensure no gap with footer
        borderTop: "none",    // Remove borders
        borderBottom: "none", // Remove borders
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
          border: "none", // Explicitly remove borders
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} justifyContent="center">
          {/* Left column with info */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "8px",
                ...gradientText,
                fontSize: { xs: "2rem", sm: "2.2rem", md: "3rem" } // Smaller on mobile
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "16px",
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" }, // Smaller on mobile
                lineHeight: 1.6,
              }}
            >
              Have a project in mind or want to discuss a collaboration opportunity? I'd love to hear from you!
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mt: 2 }}>
              {/* Email with proper mailto link */}
              <a 
                href="mailto:esfahani.cyrus@gmail.com" 
                style={{ textDecoration: 'none' }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  mb: 2,
                  p: { xs: 1.5, sm: 2 }, // Smaller padding on mobile
                  borderRadius: "12px",
                  background: "rgba(0, 230, 246, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0, 230, 246, 0.1)",
                    transform: "translateY(-3px)",
                  },
                  cursor: "pointer"
                }}>
                  <EmailIcon sx={{ 
                    color: "#00e6f6", 
                    fontSize: { xs: 24, sm: 28, md: 32 }, // Smaller on mobile
                    mr: 2,
                    filter: "drop-shadow(0 0 8px rgba(0, 230, 246, 0.5))",
                  }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ 
                      color: "white", 
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem" } // Smaller on mobile
                    }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" } // Smaller on mobile
                    }}>
                      esfahani.cyrus@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </a>

              {/* LinkedIn with proper link */}
              <a 
                href="https://www.linkedin.com/in/cyrus-esfahani-261013225/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  mb: 2,
                  p: { xs: 1.5, sm: 2 }, // Smaller padding on mobile
                  borderRadius: "12px",
                  background: "rgba(147, 51, 234, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(147, 51, 234, 0.1)",
                    transform: "translateY(-3px)",
                  },
                  cursor: "pointer"
                }}>
                  <LinkedInIcon sx={{ 
                    color: "#9333ea", 
                    fontSize: { xs: 24, sm: 28, md: 32 }, // Smaller on mobile
                    mr: 2,
                    filter: "drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))",
                  }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ 
                      color: "white", 
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem" } // Smaller on mobile
                    }}>
                      LinkedIn
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" } // Smaller on mobile
                    }}>
                      Connect with me
                    </Typography>
                  </Box>
                </Box>
              </a>

              {/* GitHub with proper link */}
              <a 
                href="https://github.com/CyrusEsfahani" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center",
                  p: { xs: 1.5, sm: 2 }, // Smaller padding on mobile
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-3px)",
                  },
                  cursor: "pointer"
                }}>
                  <GitHubIcon sx={{ 
                    color: "#ffffff", 
                    fontSize: { xs: 24, sm: 28, md: 32 }, // Smaller on mobile
                    mr: 2 
                  }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ 
                      color: "white", 
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem" } // Smaller on mobile
                    }}>
                      GitHub
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" } // Smaller on mobile
                    }}>
                      View my projects
                    </Typography>
                  </Box>
                </Box>
              </a>
            </Box>
          </Grid>

          {/* Right column with form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                backgroundColor: "rgba(20, 20, 30, 0.6)",
                backdropFilter: "blur(10px)",
                padding: { xs: "16px", sm: "20px", md: "30px" }, // Further reduced padding on mobile
                borderRadius: "16px",
                boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                position: "relative",
                overflow: "hidden",
                mt: { xs: 2, md: 0 }, // Add margin top on mobile
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
                  marginBottom: { xs: "12px", sm: "16px", md: "20px" }, // Further reduced margin on mobile
                  position: "relative", 
                  zIndex: 1, 
                  color: "white", 
                  fontWeight: 600,
                  fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.5rem" } // Smaller on mobile
                }}
              >
                Send Me a Message
              </Typography>

              <Box component="form" ref={form} onSubmit={sendEmail} sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={1.5}> {/* Reduced spacing on mobile */}
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
                      size="small" // Smaller fields on mobile
                      InputProps={{
                        sx: {
                          color: "white",
                          height: { xs: "36px", md: "40px" }, // Even smaller height on mobile
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
                          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" }, // Smaller label on mobile
                          transform: "translate(14px, 9px) scale(1)", // Adjust label position
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(14px, -6px) scale(0.75)", // Adjust shrunk label position
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
                      size="small"
                      InputProps={{
                        sx: {
                          color: "white",
                          height: { xs: "36px", md: "40px" }, // Even smaller height on mobile
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
                          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" }, // Smaller label on mobile
                          transform: "translate(14px, 9px) scale(1)", // Adjust label position
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(14px, -6px) scale(0.75)", // Adjust shrunk label position
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
                      size="small"
                      InputProps={{
                        sx: {
                          color: "white",
                          height: { xs: "36px", md: "40px" }, // Even smaller height on mobile
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
                          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" }, // Smaller label on mobile
                          transform: "translate(14px, 9px) scale(1)", // Adjust label position
                          "&.MuiInputLabel-shrink": {
                            transform: "translate(14px, -6px) scale(0.75)", // Adjust shrunk label position
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
                  
                  {/* Message Field - significantly reduced rows on mobile */}
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Message"
                      value={formState.message}
                      onChange={handleChange}
                      fullWidth
                      required
                      multiline
                      rows={3} // Fixed at 3 rows on all devices
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
                          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" }, // Smaller label on mobile
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

                {/* Submit Button - Adjusted for better mobile visibility with prominent styling */}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  endIcon={<SendIcon />}
                  sx={{
                    marginTop: { xs: "12px", sm: "16px", md: "24px" }, // Reduced top margin on mobile
                    padding: { xs: "10px 16px", md: "12px 24px" },
                    background: "linear-gradient(135deg, #00e6f6 0%, #9333ea 100%)",
                    color: "white",
                    fontWeight: 600,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "30px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    width: "100%", // Always full width for better tap target
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    height: { xs: "44px", md: "auto" }, // Taller on mobile for better tapping
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
                    marginTop: "12px",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", md: "1rem" }, // Smaller on mobile
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

  );}