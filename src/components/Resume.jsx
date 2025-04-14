import React, { useState, useEffect } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaArrowRight,
  FaGithub,
  FaAws,
  FaDocker,
  FaSass
} from 'react-icons/fa';
import {
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiCypress
} from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Inline styles for simplicity and to avoid syntax errors
  const gradientText = {
    background: 'linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    textShadow: '0 0 15px rgba(0, 230, 246, 0.15)'
  };

  const cardStyle = {
    backgroundColor: 'rgba(13, 17, 23, 0.5)',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    height: '100%'
  };

  const cyanAccent = {
    border: '1px solid rgba(0, 230, 246, 0.1)',
  };

  const purpleAccent = {
    border: '1px solid rgba(147, 51, 234, 0.1)',
  };

  const iconBoxCyan = {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    backgroundColor: 'rgba(0, 230, 246, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    boxShadow: '0 5px 15px rgba(0, 230, 246, 0.2)',
  };

  const iconBoxPurple = {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    backgroundColor: 'rgba(147, 51, 234, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    boxShadow: '0 5px 15px rgba(147, 51, 234, 0.2)',
  };

  const button = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '12px 32px',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #00e6f6 30%, #9333ea 70%)',
    color: 'white',
    fontWeight: '600',
    fontSize: '18px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
  };

  // Tech stack organized like Mehdi's portfolio
  const techStack = {
    frontend: [
      { icon: <FaHtml5 size={80} color="#E34F26" />, name: "HTML" },
      { icon: <FaCss3Alt size={80} color="#1572B6" />, name: "CSS" },
      { icon: <FaJsSquare size={80} color="#F7DF1E" />, name: "JavaScript" },
      { icon: <SiTypescript size={80} color="#3178C6" />, name: "TypeScript" },
      { icon: <FaReact size={80} color="#61DAFB" />, name: "React" },
      { icon: <SiNextdotjs size={80} color="#FFFFFF" />, name: "Next.js" },
      { icon: <FaBootstrap size={80} color="#7952B3" />, name: "Bootstrap" },
      { icon: <SiTailwindcss size={80} color="#38B2AC" />, name: "Tailwind CSS" },
      { icon: <FaSass size={80} color="#CC6699" />, name: "Sass" },
      { icon: <SiRedux size={80} color="#764ABC" />, name: "Redux" },
      { icon: <MdOutlineDesignServices size={80} color="#007FFF" />, name: "MUI" },
    ],
    backend: [
      { icon: <FaNodeJs size={80} color="#339933" />, name: "Node.js" },
      { icon: <SiExpress size={80} color="#FFFFFF" />, name: "Express" },
      { icon: <SiGraphql size={80} color="#E10098" />, name: "GraphQL" },
      { icon: <SiPython size={80} color="#3776AB" />, name: "Python" },
    ],
    databases: [
      { icon: <SiMongodb size={80} color="#47A248" />, name: "MongoDB" },
      { icon: <SiMysql size={80} color="#4479A1" />, name: "MySQL" },
      { icon: <SiPostgresql size={80} color="#336791" />, name: "PostgreSQL" },
      { icon: <SiFirebase size={80} color="#FFCA28" />, name: "Firebase" },
    ],
    devops: [
      { icon: <FaGithub size={80} color="#FFFFFF" />, name: "GitHub" },
      { icon: <FaDocker size={80} color="#2496ED" />, name: "Docker" },
      { icon: <FaAws size={80} color="#FF9900" />, name: "AWS" },
      { icon: <SiCypress size={80} color="#17202C" />, name: "Cypress" },
    ],
  };

  return (
    <section className="text-white py-10">
      <div className="max-w-6xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
        {/* About Me Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center mb-10">
            <FaCode className="text-[#00e6f6] text-3xl mr-3" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 230, 246, 0.4))' }} />
            <h2 className="text-4xl font-bold" style={gradientText}>
              About Me
            </h2>
          </div>

          {/* New Introduction Box - Added as requested */}
          <div 
            className="mb-12 py-8 px-8 rounded-xl"
            style={{
              background: 'rgba(13, 17, 23, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              lineHeight: '1.8',
            }}
          >
            <p className="text-gray-200 mb-4">
              I bring a fervent dedication to full‑stack development, combining expertise in both front‑end and back‑end technologies to deliver web applications that are as responsive as they are scalable. My work blends user‑focused design with sophisticated engineering, ensuring every interface is intuitive and every system component is rock‑solid.
            </p>
            <p className="text-gray-200">
              With a holistic grasp of the development lifecycle, I excel at shaping end‑to‑end solutions—from defining robust architectures and streamlining performance under load to crafting seamless UI interactions. By uniting visual elegance with technical rigor, I'm committed to driving innovation and producing standout digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Expertise Card - Updated with new bullet points */}
            <div style={{ ...cardStyle, ...cyanAccent, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', opacity: isVisible ? 1 : 0, transition: 'transform 0.8s ease, opacity 0.8s ease' }}>
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: '-100px',
                left: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(0, 230, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
                filter: 'blur(40px)',
                opacity: 0.1,
                zIndex: 0
              }} />

              <div className="flex items-center mb-4 relative z-10">
                <div style={iconBoxCyan}>
                  <FaLaptopCode className="text-[#00e6f6] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">Technical Expertise</h3>
              </div>

              <p className="text-gray-200 mb-4 relative z-10">
                My technical proficiency spans a wide range of modern tools and languages, empowering me to craft robust and scalable solutions. I am well-versed in programming languages such as Python, JavaScript, and I have hands-on experience with frameworks like React and Node.js.
              </p>

              <div className="relative z-10">
                {[
                  'Transportation Booking services serverless with Firebase and React',
                  'Modern dating web application',
                  'Interactive interfaces built with MUI and Tailwindcss',
                  'SEO optimization using PSQL',
                  'High-performance database architecture with MongoDB & PostgreSQL'
                ].map((item, index) => (
                  <div key={index} className="flex items-start mb-3" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-20px)', transition: `opacity 0.5s ease, transform 0.5s ease`, transitionDelay: `${index * 0.1}s` }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00e6f6', marginTop: '8px', marginRight: '12px' }} />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agile Methodology Card */}
            <div style={{ ...cardStyle, ...purpleAccent, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', opacity: isVisible ? 1 : 0, transition: 'transform 0.8s ease, opacity 0.8s ease', transitionDelay: '0.2s' }}>
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
                filter: 'blur(40px)',
                opacity: 0.1,
                zIndex: 0
              }} />

              <div className="flex items-center mb-4 relative z-10">
                <div style={iconBoxPurple}>
                  <FaBrain className="text-[#9333ea] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">Agile Methodology</h3>
              </div>

              <p className="text-gray-200 mb-4 relative z-10">
                I'm committed to the Agile approach, which embraces change as a way to improve projects and deliver additional value. My focus includes:
              </p>

              <div className="relative z-10">
                {[
                  'Continuous delivery of valuable software',
                  'Adapting to changing requirements, even late in development',
                  'Close collaboration between business stakeholders and developers',
                  'Building projects around motivated individuals with needed support',
                  'Sustainable development pace and technical excellence'
                ].map((item, index) => (
                  <div key={index} className="flex items-start mb-3" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-20px)', transition: `opacity 0.5s ease, transform 0.5s ease`, transitionDelay: `${0.3 + index * 0.1}s` }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9333ea', marginTop: '8px', marginRight: '12px' }} />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Let's Connect Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(0, 230, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px', 
            padding: '32px 48px',
            marginTop: '64px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s ease, opacity 0.8s ease',
            transitionDelay: '0.4s'
          }}>
            {/* Background animation effect */}
            <div style={{
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
              animation: 'pulse 8s infinite alternate ease-in-out'
            }} />

            <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Let's Connect & Collaborate</h3>
            
            <p className="text-gray-200 mb-8 max-w-3xl mx-auto relative z-10 text-lg">
              Feel free to explore my <span style={gradientText}>projects</span> or reach out if collaboration sounds exciting!
            </p>
            
            <a href="/contact" style={button} className="relative z-10">
              Get In Touch <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>

        {/* Tools of the Present Section - Styled like Mehdi's portfolio */}
        <div style={{ 
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.8s ease, opacity 0.8s ease',
          transitionDelay: '0.5s'
        }}>
          <h3 className="text-4xl font-semibold mb-16 text-center pb-4" style={gradientText}>
            Tools of the Present & Future
          </h3>

          {/* Frontend */}
          <div className="mb-20">
            <h4 className="text-2xl font-semibold mb-8 text-center text-[#00e6f6]">
              Frontend
            </h4>
            <div className="flex flex-wrap justify-center gap-16">
              {techStack.frontend.map((tech, index) => (
                <div 
                  key={index}
                  className="tech-icon-container group"
                  style={{
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)', 
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    transitionDelay: `${0.6 + index * 0.05}s`,
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {tech.icon}
                  <div className="tooltip">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-20">
            <h4 className="text-2xl font-semibold mb-8 text-center text-[#9333ea]">
              Backend
            </h4>
            <div className="flex flex-wrap justify-center gap-16">
              {techStack.backend.map((tech, index) => (
                <div 
                  key={index}
                  className="tech-icon-container group"
                  style={{
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)', 
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    transitionDelay: `${0.8 + index * 0.05}s`,
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {tech.icon}
                  <div className="tooltip">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & ORMs */}
          <div className="mb-20">
            <h4 className="text-2xl font-semibold mb-8 text-center text-[#00e6f6]">
              Databases & ORMs
            </h4>
            <div className="flex flex-wrap justify-center gap-16">
              {techStack.databases.map((tech, index) => (
                <div 
                  key={index}
                  className="tech-icon-container group"
                  style={{
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)', 
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    transitionDelay: `${1.0 + index * 0.05}s`,
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {tech.icon}
                  <div className="tooltip">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="mb-20">
            <h4 className="text-2xl font-semibold mb-8 text-center text-[#9333ea]">
              DevOps & Tools
            </h4>
            <div className="flex flex-wrap justify-center gap-16">
              {techStack.devops.map((tech, index) => (
                <div 
                  key={index}
                  className="tech-icon-container group"
                  style={{
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)', 
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    transitionDelay: `${1.2 + index * 0.05}s`,
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {tech.icon}
                  <div className="tooltip">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.05; }
            100% { opacity: 0.15; }
          }
          
          .tech-icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease;
          }
          
          .tech-icon-container:hover {
            transform: translateY(-5px);
          }
          
          .tooltip {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #1a1a1a;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
          }
          
          .tech-icon-container:hover .tooltip {
            opacity: 1;
            visibility: visible;
          }
        `}
      </style>
    </section>
  );
};

export default Resume;