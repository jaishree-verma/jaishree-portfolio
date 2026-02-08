// import React, { useState, useEffect, memo, useCallback } from 'react';
// import { FiGithub, FiLinkedin, FiMail, FiYoutube, FiDownload, FiMapPin, FiChevronDown } from 'react-icons/fi';
// import styles from './Sidebar.module.css';
// import mobileStyles from './SidebarMobile.module.css';
// // Memoized Link Component
// const SidebarLink = memo(({ href, icon: Icon, text, download, className }) => (
//   <li className={styles.linkItem}>
//     <a 
//       href={href}
//       target={href.startsWith('http') ? "_blank" : undefined}
//       rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
//       className={`${styles.link} ${className || ''}`}
//       {...(download ? { download } : {})}   // ✅ ensures download is passed only when provided
//     >
//       <span className={styles.iconWrapper}>
//         <Icon />
//       </span>
//       <span className={styles.linkText}>{text}</span>
//     </a>
//   </li>
// ));


// // // Memoized Link Component
// // const SidebarLink = memo(({ href, icon: Icon, text, download, className }) => (
// //   <li className={styles.linkItem}>
// //     <a 
// //       href={href}
// //       target={href.startsWith('http') ? "_blank" : undefined}
// //       rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
// //       className={`${styles.link} ${className || ''}`}
// //       download={download}
// //     >
// //       <span className={styles.iconWrapper}>
// //         <Icon />
// //       </span>
// //       <span className={styles.linkText}>{text}</span>
// //     </a>
// //   </li>
// // ));

// // Memoized Profile Section
// const ProfileSection = memo(({ isMobile, isCollapsed, onToggle }) => (
//   <div className={isMobile ? mobileStyles.profileSection : styles.profileSection}>
//     <div className={isMobile ? mobileStyles.profileInfo : styles.profileInfo}>
//       <div className={isMobile ? mobileStyles.avatarContainer : styles.avatarContainer}>
//         <div className={isMobile ? mobileStyles.avatarWrapper : styles.avatarWrapper}>
//           <img src="/profile.png" alt="Jaishree Verma" className={isMobile ? mobileStyles.avatarImg : styles.avatarImg} />
//         </div>
//       </div>
//       <div className={isMobile ? mobileStyles.profileText : styles.profileText}>
//         <h1 className={isMobile ? mobileStyles.username : styles.username}>Jaishree Verma</h1>
//         <div className={isMobile ? mobileStyles.location : styles.location}>
//           <FiMapPin /> Kanpur UP India
//         </div>
//       </div>
//     </div>
    
//     {isMobile && (
//       <button 
//         className={`${mobileStyles.toggleButton} ${isCollapsed ? mobileStyles.collapsed : ''}`}
//         onClick={onToggle}
//         aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
//       >
//         <FiChevronDown />
//       </button>
//     )}
//   </div>
// ));


// const NavigationLinks = memo(({ currentStyles }) => (
//   <nav className={currentStyles.nav}>
//     <section className={currentStyles.section}>
//       <h2 className={currentStyles.sectionHeader}>Connect</h2>
//       <ul className={currentStyles.linkList}>
//         <SidebarLink 
//           href="https://github.com/jaishree-verma"
//           icon={FiGithub}
//           text="GitHub"
//         />
//         <SidebarLink 
//           href="https://www.linkedin.com/in/jaishree-verma2004/"
//           icon={FiLinkedin}
//           text="LinkedIn"
//         />
//         <SidebarLink 
//           href="mailto:jaishree.verma.work@gmail.com"
//           icon={FiMail}
//           text="Email"
//         />
        
//       </ul>
//     </section>

//     <section className={currentStyles.section}>
//       <h2 className={currentStyles.sectionHeader}>Resume</h2>
//       <ul className={currentStyles.linkList}>
//         <SidebarLink 
//           href="/resume.pdf"
//           icon={FiDownload}
//           text="Download Resume"
//           download="Jaishree-Verma-Resume.pdf"
//           className={currentStyles.downloadLink}
//         />
//       </ul>
//     </section>
//   </nav>
// ));

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const checkIfMobile = useCallback(() => {
//     const isMobileView = window.innerWidth <= 992;
//     setIsMobile(isMobileView);
//     if (!isMobileView) setIsCollapsed(false);
//   }, []);

//   const handleToggle = useCallback(() => {
//     setIsCollapsed(prev => !prev);
//   }, []);

//   useEffect(() => {
//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, [checkIfMobile]);

//   const currentStyles = isMobile ? mobileStyles : styles;

//   return (
//     <div className={styles.sidebarContainer}>
//       <aside className={currentStyles.sidebar}>
//         <div className={currentStyles.sidebarContent}>
//           <ProfileSection 
//             isMobile={isMobile} 
//             isCollapsed={isCollapsed} 
//             onToggle={handleToggle}
//           />
//           <NavigationLinks currentStyles={currentStyles} />
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default memo(Sidebar);
import React, { useState, useEffect, memo, useCallback } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMapPin, FiChevronDown } from 'react-icons/fi';
import styles from './Sidebar.module.css';
import mobileStyles from './SidebarMobile.module.css';

// Memoized Link Component
const SidebarLink = memo(({ href, icon: Icon, text, download, className }) => (
  <li className={styles.linkItem}>
    <a 
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className={`${styles.link} ${className || ''}`}
      download={download}   // ✅ always forwards correctly
    >
      <span className={styles.iconWrapper}>
        <Icon />
      </span>
      <span className={styles.linkText}>{text}</span>
    </a>
  </li>
));

const ProfileSection = memo(({ isMobile, isCollapsed, onToggle }) => (
  <div className={isMobile ? mobileStyles.profileSection : styles.profileSection}>
    <div className={isMobile ? mobileStyles.profileInfo : styles.profileInfo}>
      <div className={isMobile ? mobileStyles.avatarContainer : styles.avatarContainer}>
        <div className={isMobile ? mobileStyles.avatarWrapper : styles.avatarWrapper}>
          <img src="/profile.png" alt="Jaishree Verma" className={isMobile ? mobileStyles.avatarImg : styles.avatarImg} />
        </div>
      </div>
      <div className={isMobile ? mobileStyles.profileText : styles.profileText}>
        <h1 className={isMobile ? mobileStyles.username : styles.username}>Jaishree Verma</h1>
        <div className={isMobile ? mobileStyles.location : styles.location}>
          <FiMapPin /> Kanpur UP India
        </div>
      </div>
    </div>
    
    {isMobile && (
      <button 
        className={`${mobileStyles.toggleButton} ${isCollapsed ? mobileStyles.collapsed : ''}`}
        onClick={onToggle}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <FiChevronDown />
      </button>
    )}
  </div>
));

const NavigationLinks = memo(({ currentStyles }) => (
  <nav className={currentStyles.nav}>
    <section className={currentStyles.section}>
      <h2 className={currentStyles.sectionHeader}>Connect</h2>
      <ul className={currentStyles.linkList}>
        <SidebarLink href="https://github.com/jaishree-verma" icon={FiGithub} text="GitHub" />
        <SidebarLink href="https://www.linkedin.com/in/jaishree-verma2004/" icon={FiLinkedin} text="LinkedIn" />
        <SidebarLink href="mailto:jaishree.verma.work@gmail.com" icon={FiMail} text="Email" />
      </ul>
    </section>

    <section className={currentStyles.section}>
      <h2 className={currentStyles.sectionHeader}>Resume</h2>
      <ul className={currentStyles.linkList}>
        <SidebarLink 
          href="C:\jaishree_projects\Portfolio\about\public\resume.pdf"
          icon={FiDownload}
          text="Download Resume"
          download="Jaishree-Verma-Resume.pdf"
          className={currentStyles.downloadLink}
        />
      </ul>
    </section>
  </nav>
));

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = useCallback(() => {
    const isMobileView = window.innerWidth <= 992;
    setIsMobile(isMobileView);
    if (!isMobileView) setIsCollapsed(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsCollapsed(prev => !prev);
  }, []);

  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [checkIfMobile]);

  const currentStyles = isMobile ? mobileStyles : styles;

  return (
    <div className={styles.sidebarContainer}>
      <aside className={currentStyles.sidebar}>
        <div className={currentStyles.sidebarContent}>
          <ProfileSection isMobile={isMobile} isCollapsed={isCollapsed} onToggle={handleToggle} />
          <NavigationLinks currentStyles={currentStyles} />
        </div>
      </aside>
    </div>
  );
};

export default memo(Sidebar);
