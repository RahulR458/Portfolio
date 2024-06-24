import styles from './ProjectsStyles.module.css';
// import viberr from '../../assets/viberr.png';
// import freshBurger from '../../assets/fresh-burger.png';
// import hipsster from '../../assets/hipsster.png';
// import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Experiance</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          // src={viberr}
          // link="https://github.com/Ade-mir/company-landing-page-2"
          h3="RAM TV Media"
          p="Video Editor"
          h4="Edited and assembled raw footage into polished final products for television and online platforms.
Specialized in editing advertisements to create compelling and engaging content.
Executed live editing for LED wall live casts, ensuring seamless integration and real-time updates."
        />
        <ProjectCard
          // src={freshBurger}
          // link="https://github.com/Ade-mir/company-landing-page-2"
          h3="RAM TV Media"
          p="Assistant Camera Man"
          h4="Operated camera for live casting and filming various events.
Recorded footage for documentary spots, capturing key moments and stories effectively."
        />
        <ProjectCard
          // src={hipsster}
          // link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Freelance"
          p="Video Editor"
          h4="Edited short films, ensuring high-quality visual storytelling.
Managed and edited content for own social media platforms, increasing audience engagement and reach."
        />
        {/* <ProjectCard
          // src={fitLift}
          // link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}



        
      </div>


      <h1 className="sectionTitle" style={{ paddingTop: '10%' }}>Education</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          // src={viberr}
          // link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Bachelor of Commerce"
          p="Kerala University"
          h4="2018 - 2021"
        />



        
      </div>
    </section>
  );
}

export default Projects;
