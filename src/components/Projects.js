import React from 'react'
import data from '../data'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <div id='projects-b' className='projects'>
      <p className='heading'>Projects</p>
      <div className='projects-list'>
        {
          data.projects.map( (project) => <ProjectCard key={project.id} project={project} /> )
        }
      </div>
    </div>
  )
}
