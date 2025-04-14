import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { keyframes } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Animation keyframes
const fadeUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutMe = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "15px",
        marginBottom: "5%",
        animation: `${fadeUp} 0.8s ease-out forwards`,
      }}
    >
      {/* About Me Text Section */}
      <Grid item xs={12} sm={6} sx={{ flexBasis: "50%" }}>
        <section className="text-white py-20">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem" },
              fontWeight: 700,
              mb: 3,
              background: "linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 15px rgba(0, 230, 246, 0.15)",
            }}
          >
            Empowering Businesses Through Innovative Software Solutions.
          </Typography>

          <Box sx={{ maxWidth: "800px" }}>
            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0" }}>
              Let's turn ideas into reality! Whether you're looking to build an
              innovative application or optimize an existing solution. I'm here
              to create, collaborate, and push boundaries. Explore my projects
              or reach out—I'm always excited about new opportunities to build
              something amazing.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0" }}>
              With expertise in both{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 600,
                }}
              >
                frontend
              </Box>{" "}
              and{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 600,
                }}
              >
                backend
              </Box>{" "}
              development, I specialize in crafting dynamic, scalable, and
              high-performance web applications.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0" }}>
              My hands-on experience includes working with{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 600,
                }}
              >
                React, Node.js, JavaScript, TypeScript, Python, and GraphQL
              </Box>
              , ensuring seamless functionality from concept to deployment.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0" }}>
              I thrive at the intersection of design and functionality, bridging
              the gap between intuitive user experiences and powerful backend
              architecture. Whether it's building scalable systems, refining UI
              interactions, or optimizing application performance, my goal is to
              deliver innovative, high-quality solutions that leave a lasting
              impact.
            </Typography>

            <Typography variant="body1" sx={{ color: "#e0e0e0" }}>
              Let's build something{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: 600,
                }}
              >
                incredible
              </Box>{" "}
              together! 🚀
            </Typography>
          </Box>
        </section>

        {/* Only Resume Button - Centered */}
        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
          <Box
            component={Link}
            href="/SEResume.pdf"
            download="Cyrus_Esfahani_Resume.pdf"
            sx={{
              borderRadius: "8px",
              padding: "16px",
              width: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              background:
                "linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(0, 230, 246, 0.15) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(147, 51, 234, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0px 8px 15px rgba(147, 51, 234, 0.2)",
                background:
                  "linear-gradient(135deg, rgba(147, 51, 234, 0.25) 0%, rgba(0, 230, 246, 0.25) 100%)",
              },
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: "1rem",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              View Resume <ArrowForwardIcon fontSize="small" />
            </Typography>
          </Box>
        </Box>
      </Grid>
      {/* Profile Image Section with enhanced breathing glow effect */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          mt: { xs: 8, sm: 0 },
          pr: { xs: 2, sm: 8 },
        }}
      >
        {/* Primary breathing glow effect - first layer */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "340px", sm: "450px" },
            height: { xs: "340px", sm: "450px" },
            right: { xs: "10px", sm: "65px" },
            top: "-20px",
            background:
              "radial-gradient(circle at center, rgba(0, 230, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 40%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(45px)",
            borderRadius: "50%",
            zIndex: 0,
            opacity: 0.8,
            animation: "breathePrimary 6s infinite alternate ease-in-out",
            "@keyframes breathePrimary": {
              "0%": {
                transform: "scale(0.85)",
                opacity: 0.6,
                background:
                  "radial-gradient(circle at center, rgba(0, 230, 246, 0.9) 0%, rgba(147, 51, 234, 0.6) 40%, rgba(0, 0, 0, 0) 70%)",
              },
              "100%": {
                transform: "scale(1.15)",
                opacity: 0.9,
                background:
                  "radial-gradient(circle at center, rgba(147, 51, 234, 0.9) 0%, rgba(0, 230, 246, 0.6) 40%, rgba(0, 0, 0, 0) 70%)",
              },
            },
          }}
        />

        {/* Secondary breathing glow effect - second layer */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "300px", sm: "400px" },
            height: { xs: "300px", sm: "400px" },
            right: { xs: "25px", sm: "90px" },
            top: "15px",
            background:
              "radial-gradient(circle at center, rgba(147, 51, 234, 0.7) 0%, rgba(0, 230, 246, 0.5) 50%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(40px)",
            borderRadius: "50%",
            zIndex: 0,
            opacity: 0.9,
            animation: "breatheSecondary 8s infinite alternate ease-in-out",
            "@keyframes breatheSecondary": {
              "0%": {
                transform: "scale(1)",
                opacity: 0.7,
                background:
                  "radial-gradient(circle at center, rgba(147, 51, 234, 0.8) 0%, rgba(0, 230, 246, 0.5) 50%, rgba(0, 0, 0, 0) 70%)",
              },
              "100%": {
                transform: "scale(1.3)",
                opacity: 0.9,
                background:
                  "radial-gradient(circle at center, rgba(0, 230, 246, 0.8) 0%, rgba(147, 51, 234, 0.5) 50%, rgba(0, 0, 0, 0) 70%)",
              },
            },
            animationDelay: "1s",
          }}
        />

        {/* Third decorative glow pulse */}
        <Box
          sx={{
            position: "absolute",
            width: "220px",
            height: "220px",
            right: { xs: "70px", sm: "140px" },
            top: "80px",
            background:
              "radial-gradient(circle at center, rgba(0, 230, 246, 1) 0%, rgba(0, 230, 246, 0) 70%)",
            filter: "blur(25px)",
            borderRadius: "50%",
            zIndex: 0,
            opacity: 0.6,
            animation: "pulse 4s infinite alternate ease-in-out",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(0.7)",
                opacity: 0.5,
                background:
                  "radial-gradient(circle at center, rgba(0, 230, 246, 1) 0%, rgba(0, 230, 246, 0) 70%)",
              },
              "100%": {
                transform: "scale(1.2)",
                opacity: 0.7,
                background:
                  "radial-gradient(circle at center, rgba(147, 51, 234, 1) 0%, rgba(147, 51, 234, 0) 70%)",
              },
            },
          }}
        />

        <Box
          sx={{
            position: "relative",
            width: "350px",
            height: "350px",
            zIndex: 2,
            "&:before": {
              // Background box
              content: '""',
              position: "absolute",
              bottom: "-30px",
              right: "-30px",
              width: "350px",
              height: "350px",
              backgroundColor: "#2d2d2d",
              borderRadius: "8px",
              zIndex: 1,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              border: "1px solid rgba(147, 51, 234, 0.2)",
            },
            "&:after": {
              // Dots pattern
              content: '""',
              position: "absolute",
              bottom: "10px",
              right: "10px",
              width: "80px",
              height: "80px",
              background: `
          radial-gradient(circle at 90% 90%, 
            rgba(0, 230, 246, 0.9) 3%, 
            transparent 4%
          )`,
              backgroundSize: "20px 20px",
              zIndex: 2,
              opacity: 0.9,
            },
          }}
        >
          {/* Image Container */}
          <Box
            sx={{
              position: "relative",
              width: "350px",
              height: "350px",
              borderRadius: "8px",
              overflow: "hidden",
              transform: "translate(-30px, -30px)",
              zIndex: 3,
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(0, 230, 246, 0.2)",
              "&:hover": {
                transform: "translate(-30px, -35px)",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.4), 0 0 0 2px rgba(0, 230, 246, 0.3)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              },
            }}
          >
            <img
              src="/DSC01942.JPG"
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top", // Focus on face
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;