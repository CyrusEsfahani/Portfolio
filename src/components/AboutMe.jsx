import React from "react";
import { Link } from "react-router-dom"; // Import Link for proper routing
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
  // Gradient text style
  const gradientText = {
    background: 'linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700
  };

  // Button style with improvements for mobile
  const button = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #00e6f6 0%, #9333ea 100%)',
    color: 'white',
    fontWeight: 600,
    borderRadius: '30px',
    textDecoration: 'none',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    minHeight: '44px', // Ensures good tap target on mobile
    minWidth: '180px'  // Ensures button is wide enough on mobile
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: { xs: "5px", sm: "15px" }, // Reduced margin on mobile
        marginBottom: { xs: "2%", sm: "5%" }, // Reduced margin on mobile
        animation: `${fadeUp} 0.8s ease-out forwards`,
        border: "none", // Ensure no borders
        borderBottom: "none", // Explicitly remove bottom border
        overflow: "hidden" // Prevent any overflow issues
      }}
    >
      {/* About Me Text Section */}
      <Grid item xs={12} sm={6} sx={{ flexBasis: "50%" }}>
        <section className="text-white py-10 sm:py-20"> {/* Reduced padding on mobile */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem" }, // Smaller font on mobile
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
            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0", fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              Let's turn ideas into reality! Whether you're looking to build an
              innovative application or optimize an existing solution. I'm here
              to create, collaborate, and push boundaries. Explore my projects
              or reach out—I'm always excited about new opportunities to build
              something amazing.
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0", fontSize: { xs: "0.95rem", sm: "1rem" } }}>
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

            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0", fontSize: { xs: "0.95rem", sm: "1rem" } }}>
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

            <Typography variant="body1" sx={{ mb: 3, color: "#e0e0e0", fontSize: { xs: "0.95rem", sm: "1rem" } }}>
              I thrive at the intersection of design and functionality, bridging
              the gap between intuitive user experiences and powerful backend
              architecture. Whether it's building scalable systems, refining UI
              interactions, or optimizing application performance, my goal is to
              deliver innovative, high-quality solutions that leave a lasting
              impact.
            </Typography>

            <Typography variant="body1" sx={{ color: "#e0e0e0", fontSize: { xs: "0.95rem", sm: "1rem" } }}>
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

        {/* Two Separate Cards - Updated modern style */}
        <Grid container spacing={3} sx={{ mt: { xs: 4, sm: 6 } }}>
          {/* Contact Me Card */}
          <Grid item xs={12} sm={6}>
            <Box
              component={Link} // Changed from MUI Link to react-router-dom Link
              to="/contact" // Changed from href to to for proper routing
              sx={{
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                height: "100%",
                background:
                  "linear-gradient(135deg, rgba(0, 230, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 230, 246, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0px 8px 15px rgba(0, 230, 246, 0.2)",
                  background:
                    "linear-gradient(135deg, rgba(0, 230, 246, 0.25) 0%, rgba(147, 51, 234, 0.25) 100%)",
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
                Contact Me <ArrowForwardIcon fontSize="small" />
              </Typography>
            </Box>
          </Grid>

          {/* View Resume Card */}
          <Grid item xs={12} sm={6}>
            <Box
              component={Link} // Using Link for consistency
              to="/resume.pdf" // This will need appropriate handling for file downloads
              download="Cyrus_Esfahani_Resume.pdf"
              sx={{
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                height: "100%",
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
          </Grid>
        </Grid>
      </Grid>
      {/* Profile Image Section with enhanced breathing glow effect */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" }, // Center on mobile
          mt: { xs: 6, sm: 0 }, // Increased spacing on mobile
          pr: { xs: 0, sm: 8 }, // Remove padding on mobile
          mb: { xs: 4, sm: 0 }, // Add margin bottom on mobile
        }}
      >
        {/* Primary breathing glow effect - first layer */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "300px", sm: "450px" },
            height: { xs: "300px", sm: "450px" },
            right: { xs: "auto", sm: "65px" }, // Center on mobile
            top: { xs: "-10px", sm: "-20px" },
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
            width: { xs: "280px", sm: "400px" },
            height: { xs: "280px", sm: "400px" },
            right: { xs: "auto", sm: "90px" }, // Center on mobile
            top: { xs: "15px", sm: "15px" },
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

        {/* Removed third decorative glow pulse for mobile simplicity */}

        <Box
          sx={{
            position: "relative",
            width: { xs: "300px", sm: "350px" }, // Smaller on mobile
            height: { xs: "300px", sm: "350px" }, // Smaller on mobile
            zIndex: 2,
            "&:before": {
              // Background box
              content: '""',
              position: "absolute",
              bottom: "-20px", // Reduced on mobile
              right: { xs: 0, sm: "-30px" }, // Centered on mobile
              left: { xs: 0, sm: "auto" }, // Centered on mobile
              width: { xs: "90%", sm: "350px" }, // Adjusted for mobile
              height: { xs: "90%", sm: "350px" }, // Adjusted for mobile
              margin: { xs: "auto", sm: 0 }, // Center on mobile
              backgroundColor: "#2d2d2d",
              borderRadius: "8px",
              zIndex: 1,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              border: "1px solid rgba(147, 51, 234, 0.2)",
            },
            "&:after": {
              // Dots pattern - removed on mobile for simplicity
              content: { xs: "none", sm: '""' },
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
              width: { xs: "300px", sm: "350px" }, // Smaller on mobile
              height: { xs: "300px", sm: "350px" }, // Smaller on mobile
              borderRadius: "8px",
              overflow: "hidden",
              transform: { xs: "translate(0, -15px)", sm: "translate(-30px, -30px)" }, // Centered on mobile
              zIndex: 3,
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.3), 0 0 0 1px rgba(0, 230, 246, 0.2)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              margin: { xs: "0 auto", sm: 0 }, // Center on mobile
              "&:hover": {
                transform: { 
                  xs: "translate(0, -20px)", 
                  sm: "translate(-30px, -35px)" 
                },
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.4), 0 0 0 2px rgba(0, 230, 246, 0.3)",
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

      {/* Let's Connect section - Made responsive for mobile */}
      <Grid item xs={12} sx={{ 
        mt: { xs: 4, sm: 8 },
        mb: { xs: 6, sm: 10 },
        px: { xs: 2, sm: 4 },
        borderTop: "none",
        borderBottom: "none"
      }}>
        <Box sx={{ 
          background: 'linear-gradient(135deg, rgba(0, 230, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '16px', 
          padding: { xs: '24px 16px', sm: '32px 48px' },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background effect */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(0, 230, 246, 0.5) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.5) 0%, transparent 50%)
            `,
            filter: 'blur(50px)',
            opacity: 0.1,
            zIndex: 0,
          }} />

          <Typography variant="h3" sx={{ 
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            mb: 2,
            zIndex: 1,
            position: 'relative'
          }}>
            Let's Connect & Collaborate
          </Typography>
          
          <Typography sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            mb: { xs: 4, sm: 6 },
            fontSize: { xs: '1rem', sm: '1.1rem' },
            maxWidth: '700px',
            mx: 'auto',
            zIndex: 1,
            position: 'relative'
          }}>
            Feel free to explore my <span style={gradientText}>projects</span> or reach out if collaboration sounds exciting!
          </Typography>
          
          {/* Fixed Get In Touch button with react-router-dom Link */}
          <Link to="/contact" style={{...button, textDecoration: 'none'}} className="hover:shadow-lg hover:shadow-cyan-500/30 relative z-10">
            Get In Touch <ArrowForwardIcon sx={{ ml: 1 }} />
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutMe;