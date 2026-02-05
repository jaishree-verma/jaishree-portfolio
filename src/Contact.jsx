import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from './ThemeContext';
import { Send, Check, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4000/contact', { // backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setLoading(false);
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className={styles.contactGrid}>
        <motion.div className={styles.formSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className={styles.contactInfo}>
            <motion.h1 className={styles.title} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              Get in Touch
            </motion.h1>
            <motion.div className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <p>If you're interested in collaboration, have a project in mind, or just want to chat about tech, ideas and designs, I'd love to hear from you!</p>
              <p>Reach out via email at <strong>jaishree.verma.work@gmail.com</strong>.</p>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <motion.div className={styles.formGrid} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className={`${styles.formGroup} ${focused === 'name' ? styles.focused : ''}`}>
                <input type="text" name="name" required className={styles.input} placeholder="Your Name" onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
              </div>
              <div className={`${styles.formGroup} ${focused === 'email' ? styles.focused : ''}`}>
                <input type="email" name="email" required className={styles.input} placeholder="Your Email" onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
              </div>
            </motion.div>

            <motion.div className={`${styles.formGroup} ${focused === 'message' ? styles.focused : ''}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <textarea name="message" required className={styles.textarea} placeholder="Your Message" rows="6" onFocus={() => setFocused('message')} onBlur={() => setFocused('')} />
            </motion.div>

            <motion.button type="submit" className={styles.submitButton} disabled={loading} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {loading ? (
                <span className={styles.loading}>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                  <span className={styles.loadingDot}></span>
                </span>
              ) : (
                <>
                  <Send className={styles.buttonIcon} />
                  Send Message
                </>
              )}
            </motion.button>

            {status && (
              <motion.div className={`${styles.alert} ${styles[status]}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
                {status === 'success' ? (
                  <>
                    <Check className={styles.alertIcon} />
                    Message sent successfully!
                  </>
                ) : (
                  <>
                    <AlertCircle className={styles.alertIcon} />
                    Failed to send message. Please try again.
                  </>
                )}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
