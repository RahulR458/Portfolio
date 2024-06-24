import React from 'react';

function ProjectCard({ src, link, h3, p, h4,h2 }) {
  return (
    <a href={link} target="_blank">
      {/* <img className="hover" src={src} alt={`${h3} logo`} /> */}
      <h3>{h3}</h3>
      <p>{p}</p>
      <h4>{h4}</h4>
    </a>
  );
}

export default ProjectCard;
