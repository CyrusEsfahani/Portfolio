// Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUp, FaEnvelope, FaHeart } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Gradient text style
  const gradientText = {
    background: 'linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 600
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'rgba(15, 15, 20, 0.95)', 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        py: 5,
        mt: 5, // Add margin top to separate from content
        width: '100%', // Ensure it spans full width
        position: 'relative',
        overflow: 'visible' // Changed from 'hidden' to ensure all content is visible
      }}
    >
      {/* Background glow effect */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 230, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)
          `,
          opacity: 0.8,
          zIndex: 0,
        }} 
      />

      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: 4
          }}
        >
          {/* Left Column - About */}
          <Box 
            sx={{ 
              mb: { xs: 4, md: 0 }, 
              textAlign: { xs: 'center', md: 'left' }, 
              maxWidth: { md: '300px' },
              width: { xs: '100%', md: 'auto' }
            }}
          >
            <Typography variant="h6" component="h2" sx={{ mb: 1, ...gradientText }}>
              Cyrus Esfahani
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 2 }}>
              Full-stack developer specializing in creating modern, responsive web applications with React, Node.js, and cutting-edge technologies.
            </Typography>
          </Box>

          {/* Middle Column - Quick Links */}
          <Box 
            sx={{ 
              mb: { xs: 4, md: 0 }, 
              textAlign: 'center',
              width: { xs: '100%', md: 'auto' }
            }}
          >
            <Typography variant="subtitle1" component="h3" sx={{ mb: 2, color: '#00e6f6' }}>
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography 
                component={Link} 
                to="/" 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: '#00e6f6' },
                  transition: 'color 0.3s ease'
                }}
              >
                Home
              </Typography>
              <Typography 
                component={Link} 
                to="/projects" 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: '#00e6f6' },
                  transition: 'color 0.3s ease'
                }}
              >
                Projects
              </Typography>
              <Typography 
                component={Link} 
                to="/contact" 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: '#00e6f6' },
                  transition: 'color 0.3s ease'
                }}
              >
                Contact
              </Typography>
            </Box>
          </Box>

          {/* Right Column - Connect */}
          <Box 
            sx={{ 
              textAlign: { xs: 'center', md: 'right' },
              width: { xs: '100%', md: 'auto' }
            }}
          >
            <Typography variant="subtitle1" component="h3" sx={{ mb: 2, color: '#9333ea' }}>
              Let's Connect
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 2 }}>
              <IconButton 
                component="a"
                href="https://www.linkedin.com/in/cyrus-esfahani-261013225/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#00e6f6',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#9333ea',
                    transform: 'translateY(-5px)',
                  },
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </IconButton>
              
              <IconButton 
                component="a"
                href="https://github.com/CyrusEsfahani"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: '#00e6f6',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#9333ea',
                    transform: 'translateY(-5px)',
                  },
                }}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </IconButton>
              
              <IconButton 
                component="a"
                href="mailto:esfahani.cyrus@gmail.com"
                sx={{ 
                  color: '#00e6f6',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#9333ea',
                    transform: 'translateY(-5px)',
                  },
                }}
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Back to Top Button & Copyright - This part was missing/cut off */}
        <Box 
          sx={{ 
            mt: 4, 
            textAlign: 'center', 
            pt: 3, 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            width: '100%'
          }}
        >
          <IconButton 
            onClick={scrollToTop}
            sx={{ 
              mb: 2,
              color: '#00e6f6',
              backgroundColor: 'rgba(147, 51, 234, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                backgroundColor: 'rgba(147, 51, 234, 0.2)',
                transform: 'translateY(-5px)',
              },
            }}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </IconButton>
          
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 1 }}>
            © {new Date().getFullYear()} Cyrus Esfahani. All rights reserved.
          </Typography>
          
          <Typography variant="body2" sx={{ 
            color: 'rgba(255, 255, 255, 0.4)', 
            mt: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 0.5 
          }}>
            Designed with <FaHeart style={{ color: '#9333ea', fontSize: '0.8rem' }} /> using React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;