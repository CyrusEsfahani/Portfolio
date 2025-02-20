import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const AboutMe = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "15px",
        marginBottom: "5%",
      }}
    >
      {/* About Me Text Section */}
      <Grid item xs={12} sm={6} sx={{ flexBasis: "50%" }}>
        <section className="text-white py-20">
          <Typography variant="h2" sx={{ fontSize: "2.5rem", fontWeight: 700, mb: 3 }}>
            Empowering Businesses Through Innovative Software Solutions.
          </Typography>
          <Box sx={{ maxWidth: "800px" }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Let's turn ideas into reality! Whether you're looking to build an innovative application or optimize an existing solution. I'm here to create, collaborate, and push boundaries. Explore my projects or reach out—I'm always excited about new opportunities to build something amazing.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              With expertise in both frontend and backend development, I specialize in crafting dynamic, scalable, and high-performance web applications.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              My hands-on experience includes working with <strong>React, Node.js, JavaScript, TypeScript, Python, and GraphQL</strong>, ensuring seamless functionality from concept to deployment.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I thrive at the intersection of design and functionality, bridging the gap between intuitive user experiences and powerful backend architecture. Whether it's building scalable systems, refining UI interactions, or optimizing application performance, my goal is to deliver innovative, high-quality solutions that leave a lasting impact.
            </Typography>
            <Typography variant="body1">
              Let’s build something incredible together! 🚀
            </Typography>
          </Box>
        </section>

        {/* Two Separate Cards */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {/* Contact Me Card */}
          <Grid item xs={12} sm={6}>
            <Box
              component={Link}
              href="/contact"
              sx={{
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  color: "#00e6f6",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Contact Me
              </Typography>
            </Box>
          </Grid>

          {/* View Resume Card */}
          <Grid item xs={12} sm={6}>
            <Box
              component={Link}
              href="/resume.pdf"
              download="Cyrus_Esfahani_Resume.pdf"
              sx={{
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  color: "#00e6f6",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                View Resume
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Profile Image Section */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          mt: { xs: 8, sm: 0 },
          pr: 8, // Add right padding for alignment
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '350px', // Adjusted size for square shape
            height: '350px', // Adjusted size for square shape
            '&:before': {
              // Background box
              content: '""',
              position: 'absolute',
              bottom: '-30px', // Adjusted for alignment
              right: '-30px', // Adjusted for alignment
              width: '350px', // Same as image container for square shape
              height: '350px', // Same as image container for square shape
              backgroundColor: '#2d2d2d',
              borderRadius: '8px',
              zIndex: 1,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            },
            '&:after': {
              // White dots pattern
              content: '""',
              position: 'absolute',
              bottom: '10px', // Adjusted for alignment
              right: '10px', // Adjusted for alignment
              width: '80px', // Adjusted size for smaller dots pattern
              height: '80px', // Adjusted size for smaller dots pattern
              background: `
                radial-gradient(circle at 90% 90%, 
                  rgba(255,255,255,0.9) 3%, 
                  transparent 4%
                )`,
              backgroundSize: '20px 20px',
              zIndex: 2,
              opacity: 0.9,
            },
          }}
        >
          {/* Image Container */}
          <Box
            sx={{
              position: 'relative',
              width: '350px',
              height: '350px',
              borderRadius: '8px',
              overflow: 'hidden',
              transform: 'translate(-30px, -30px)', // Adjusted for alignment
              zIndex: 3,
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
              '&:hover': {
                transform: 'translate(-30px, -35px)', // Adjusted for alignment
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <img
              src='https://randomuser.me/api/portraits/men/75.jpg'
              alt='Profile'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          {/* Quote Box */}
          <Box
            sx={{
              position: 'absolute',
              left: '-20%', // Adjusted for smaller size
              bottom: '20px', // Adjusted for alignment
              width: '120%', // Adjusted for smaller size
              backgroundColor: 'rgba(255,255,255,0.97)',
              padding: '16px', // Adjusted for smaller size
              borderRadius: '8px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
              zIndex: 4,
            }}
          >
            <Typography
              variant='body2' // Adjusted for smaller text
              sx={{
                color: '#1a1a1a',
                fontStyle: 'italic',
                fontWeight: 500,
                lineHeight: 1.4, // Adjusted for tighter line spacing
              }}
            >
              "Many ideas grow better when transplanted into another mind than
              the one where they sprang up."
              <Box
                component='span'
                sx={{
                  display: 'block',
                  mt: 1, // Adjusted for smaller margin
                  fontWeight: 700,
                  color: '#3696FD',
                }}
              >
                – Oliver Wendell Holmes
              </Box>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;


