import styles from './HeroStyles.module.css';
import heroImg from '../../assets/DSC00702-01.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rahul R
        </h1>
        <h2>Video Editor</h2>
        <span>
        <h3>+91 9633081811</h3>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          {/* <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a> */}
          <a href="https://www.linkedin.com/in/rahul-r-613b431ab/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          
        </span>
        <p className={styles.description}>
        Video editor with more than eight years in the industry, specializing in creating engaging and high-quality video content for various platforms.
        </p>
        <a href="https://drive.google.com/file/d/1AqkS27mVJyNJLZy3XQGihkQM86DoPsvm/view?usp=drive_link" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
