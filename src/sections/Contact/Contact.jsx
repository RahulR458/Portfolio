import styles from './ContactStyles.module.css';
import './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
    <h1 className={styles.sectionTitle}>Contact</h1>
    <p>Get in Touch</p>
    <div className={styles.contactInfoUpperContainer}>
      <div className={styles.contactInfoContainer}>
        {/* Uncomment the below line if you have an email icon image */}
        {/* <img
          src={emailIcon}
          alt="Email icon"
          className={`${styles.icon} ${styles.contactIcon} ${styles.emailIcon}`}
        /> */}
        <p><a href="mailto:examplemail@gmail.com">rahul404dev@gmail.com</a></p>
      </div>
      <div className={styles.contactInfoContainer}>
        {/* Uncomment the below line if you have a LinkedIn icon image */}
        {/* <img
          src={linkedinIcon}
          alt="LinkedIn icon"
          className={`${styles.icon} ${styles.contactIcon}`}
        /> */}
        <p><a href="https://www.linkedin.com/in/rahul-r-613b431ab/">LinkedIn</a></p>
       
      </div>
      <div className={styles.contactInfoContainer}>
        {/* Uncomment the below line if you have a LinkedIn icon image */}
        {/* <img
          src={linkedinIcon}
          alt="LinkedIn icon"
          className={`${styles.icon} ${styles.contactIcon}`}
        /> */}
        <p><a href="https://www.youtube.com/@lallutechvlogs7293">Youtube</a></p>
      </div>
    </div>
  </section>
  );
}

export default Contact;
