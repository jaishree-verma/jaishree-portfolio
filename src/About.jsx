import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Brain, Layers } from 'lucide-react';
import styles from './About.module.css';

// Jaishree's code snippet
const codeLines = [
  { type: 'comment', content: '// Designing, Debugging, Learning ✨' },
  { type: 'code', content: 'const jaishree = {' },
  { type: 'property', content: '  role: "UI/UX Designer, Problem Solver, Full Stack Developer and aspiring Software Developer",' },
  { type: 'array-start', content: '  focus: [' },
  { type: 'array-item', content: '    "Building Ideas",' },
  { type: 'array-item', content: '    "Learning",' },
  { type: 'array-item', content: '    "Acquiring Knowledge"' },
  { type: 'array-end', content: '  ]' },
  { type: 'code', content: '};' }
];

// Jaishree's focus areas
const focusAreas = [
  { icon: <Code2 strokeWidth={1.5} />, title: "Frontend", desc: "Cinematic UI & Animation", color: "var(--accent-success)" },
  { icon: <Layers strokeWidth={1.5} />, title: "Backend", desc: "APIs", color: "var(--accent-warning)" },
  // { icon: <Brain strokeWidth={1.5} />, title: "AI/ML", desc: "Intelligent Systems", color: "var(--accent-error)" },
  { icon: <Cpu strokeWidth={1.5} />, title: "Design", desc: "Playful UX & Branding", color: "var(--primary)" },
  { icon: <Cpu strokeWidth={1.5} />, title: "DevOps & Cloud", desc: "DevOps tools & cloud technologies", color: "var(--primary)" },
];

// Jaishree's skill stack
const skills = [
  { name: "JavaScript", category: "languages", color: "var(--primary)" },
  { name: "React", category: "frontend", color: "var(--accent-success)" },
  { name: "CSS", category: "frontend", color: "var(--accent-success)" },
  { name: "BootStrap", category: "frontend", color: "var(--accent-success)" },
  { name: "Tailwind", category: "frontend", color: "var(--accent-success)" },
  { name: "Java", category: "languages", color: "var(--accent-success)" },
  { name: "Python", category: "languages", color: "var(--primary)" },
  { name: "MySQL", category: "Database", color: "var(--accent-warning)" },
  { name: "MongoDB", category: "Database", color: "var(--accent-error)" },
  { name: "Git/GitHub", category: "devops", color: "var(--secondary-dark)" },
  { name: "GitHub Actions", category: "devops", color: "var(--secondary-dark)" },
  { name: "Figma", category: "UX", color: "var(--secondary-dark)" },
  { name: "Tailwind", category: "frontend", color: "var(--accent-warning)" },
  { name: "Node.js", category: "backend", color: "var(--primary)" },
  { name: "Express.js", category: "backend", color: "var(--primary)" },
  { name: "VS Code", category: "tool", color: "var(--primary)" },
  { name: "Vercel", category: "Deploy", color: "var(--primary)" },
  { name: "Docker", category: "DevOps & Cloud", color: "var(--primary)" },
  { name: "Kubernetes", category: "DevOps & Cloud", color: "var(--primary)" },
  { name: "Grafana", category: "DevOps & Cloud", color: "var(--primary)" },
  { name: "Prometheus", category: "DevOps & Cloud", color: "var(--primary)" },
  { name: "Jenkins", category: "DevOps & Cloud", color: "var(--primary)" },
  { name: "DBMS", category: "Core", color: "var(--primary)" },
  { name: "OOPS", category: "Core", color: "var(--primary)" },
  { name: "Computer Networks", category: "Core", color: "var(--primary)" },
];

// Terminal header
const TerminalHeader = memo(() => (
  <div className={styles.terminalHeader}>
    <div className={styles.terminalDots}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={styles.terminalTitle}>jaishree.config.js</div>
  </div>
));

// Code line animation
const CodeLine = memo(({ line, index, activeLine }) => (
  <motion.div
    className={`${styles.line} ${styles[line.type]}`}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: index <= activeLine ? 1 : 0, x: index <= activeLine ? 0 : -10 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    {line.content}
  </motion.div>
));

// Focus area card
const FocusItem = memo(({ area }) => (
  <motion.div 
    className={styles.focusItem}
    style={{ '--focus-color': area.color }}
    whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400 } }}
  >
    <div className={styles.focusIcon}>{area.icon}</div>
    <div className={styles.focusText}>
      <div className={styles.focusTitle}>{area.title}</div>
      <div className={styles.focusDesc}>{area.desc}</div>
    </div>
  </motion.div>
));

// Skill bubble
const SkillItem = memo(({ skill, index, onHoverStart, onHoverEnd }) => (
  <motion.div
    className={styles.skillItem}
    style={{ '--skill-color': skill.color }}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.2 + index * 0.05, type: "spring", stiffness: 400 }}
    whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400 } }}
    onHoverStart={() => onHoverStart(index)}
    onHoverEnd={() => onHoverEnd()}
  >
    <span className={styles.skillText}>{skill.name}</span>
    <div className={styles.skillCategory}>{skill.category}</div>
    <div className={styles.skillGlow} />
  </motion.div>
));

// Main About component
const About = () => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHoverStart = useCallback((index) => {
    setHoveredSkill(index);
  }, []);

  const handleSkillHoverEnd = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setCodeVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!codeVisible || activeLine >= codeLines.length - 1) return;

    let rafId;
    const animate = () => {
      setActiveLine(prev => prev + 1);
      if (activeLine < codeLines.length - 2) {
        rafId = requestAnimationFrame(animate);
      }
    };
    
    const timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [codeVisible, activeLine]);

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.terminal}>
        <TerminalHeader />
        <AnimatePresence>
          {codeVisible && (
            <motion.div 
              className={styles.terminalBody}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {codeLines.map((line, index) => (
                <CodeLine 
                  key={index}
                  line={line}
                  index={index}
                  activeLine={activeLine}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.content}>
        <motion.div 
          className={styles.focusGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {focusAreas.map((area) => (
            <FocusItem key={area.title} area={area} />
          ))}
        </motion.div>

        <motion.div 
          className={styles.skillsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {skills.map((skill, index) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              index={index}
              onHoverStart={handleSkillHoverStart}
              onHoverEnd={handleSkillHoverEnd}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(About);
