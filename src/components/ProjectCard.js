import React from 'react'
import { GoRepo } from "react-icons/go";

export const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
        <div className='project-card-image'>
            <img src={project.image} alt={project.name} className='project-image' />
        </div>

        <div className='project-card-details'> 
            <p className='card-name'>
            <span>
                <GoRepo className='card-icon' />
            </span>
            {project.name}
            </p>
            <p className='card-description'>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link alink'>
                <button className='btn'>View Project</button>
            </a>
        </div>
    </div>
  )
}
