// Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGit } from 'react-icons/fa';
import styles from './Resume.module.css';

const Resume = () => {
  const education = {
    school: "Pranveer Singh Instiute of Technology (PSITK)",
    degree: "B.Techin Artificial Intelligence & Machine Learning",
    location: "Kanpur, UP, India",
    duration: "Oct 2023 - Aug 27",
    gpa: "6.8 gpa",
    achievements: [
      // "4 Star Hackerrank - Python , Java",
      // "Vice President - Bastion Club PSIT"
    ]
  };

  const experience = [
    {
      title: "Vice President",
      company: "The Bastion Club",
      location: "Kanpur, UP, India",
      duration: "Dec 2024 - Apr 2024",
      points: [
        "Successfully managed the flagship college event Ignitia, leading cross-club collaborations to ensure seamless planning, execution, and audience engagement.",
        "Led the club's core team, managing operations, coordination, and event execution.",
        "Designed UI/UX for the club’s digital platforms, enhancing user interaction and visual identity."
      ]
    },
    
  ];

  const projects = [
    {
      title: "Go Ticket",
      subtitle: "An Online AI based Booking Platform",
      description: "Built a bus ticket booking platform with a responsive front end using React.js, JavaScript, HTML, CSS.",
      tech: "PYTHON, HTML, CSS, JS, MERN, AI (chatbot model), JWT, API’s",
      link: "https://github.com/anshika-pandey2311222/GoTicket",
      // devpost: "https://devpost.com/software/lurelore"
    },
    {
      title: "College_Survey",
      subtitle: "Full Stack Web Application",
      description: "Built and deployed platform enabling 250+ Engineering Science students to track major preferences with real-time visualization",
      tech: "MERN Stack, Vercel, Render",
      link: "https://github.com/jaishree-verma/College_Survey",
      live: "https://2t7-major-survey.vercel.app/vote"
    },
    
  ];

  const skills = {
    technical: "Python, JavaScript, Java, React.js, Node.js, Express.js, HTML/CSS, Tailwind CSS, MongoDB, Render, Git/Github, Vs Code",
    languages: "English (Native)"
  };

  return (
    <motion.div 
      className={styles.resumeContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <motion.header 
        className={styles.header}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1>Jaishree Verma</h1>
        <div className={styles.contactInfo}>
          <a href="mailto:jaishree.verma.work@gmail.com" className={styles.contactItem}>
            <FaEnvelope /> jaishree.verma.work@gmail.com
          </a>
          <a href="https://daniel-hong.org" className={styles.contactItem}>
            <span>jaishree-verma.org</span>
          </a>
          <a href="https://www.linkedin.com/in/jaishree-verma2004//" className={styles.contactItem}>
            <FaLinkedin /> LinkedIn
          </a>
        
        </div>
      </motion.header>

      {/* Rest of the component remains the same, continuing with Education section... */}
      
      {/* Education Section */}
      <motion.section 
        className={styles.section}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Education</h2>
        <div className={styles.educationCard}>
          <div className={styles.eduHeader}>
            <div>
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
            </div>
            <div className={styles.eduMeta}>
              <p>{education.duration}</p>
              <p>{education.location}</p>
              <p className={styles.gpa}>{education.gpa}</p>
            </div>
          </div>
          <ul className={styles.achievements}>
            {education.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className={styles.section}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.expHeader}>
              <div>
                <h3>{exp.title}</h3>
                <p className={styles.company}>{exp.company}</p>
              </div>
              <div className={styles.expMeta}>
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className={styles.expPoints}>
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className={styles.section}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Sample Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.projectCard}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3>{project.title}</h3>
              <p className={styles.projectSubtitle}>{project.subtitle}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.techStack}>Tech Stack: {project.tech}</p>
              <div className={styles.projectLinks}>
                {project.link && (
                  <a href={project.link} className={styles.projectLink}>
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.devpost && (
                  <a href={project.devpost} className={styles.projectLink}>
                    DevPost
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className={styles.projectLink}>
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className={styles.section}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3>Technical Skills</h3>
            <p>{skills.technical}</p>
          </div>
          <div className={styles.skillCategory}>
            <h3>Languages</h3>
            <p>{skills.languages}</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Resume;