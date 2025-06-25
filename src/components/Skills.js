import React from 'react'
import skillImg from '../assets/images/second2.webp';
import data from '../data';

export const Skills = () => {
  return (
    <div id='skills-b' className='skills outer-box outer-box2'>
      
      <div className='skills-box1 inner-box2'>
        <img src={skillImg} alt="skills" className='img-in-div' />
      </div>

      <div className='skills-box2 inner-box1'>
        <p className='heading'>{data.skills.Heading}</p>
        
        <p className='description'>{data.skills.Description}</p>
        <div className='skills-list'>
          {
            data.skills.skillIcons.map( (skill) => (
              <div key={skill.id} className='each-skill'>
                <div className='skill-icons-box skill-icon-box'>
                  <img src={skill.image} alt={skill.name} className='each-skill-img icons' />
                </div>
                <p className='each-skill-name'>{skill.name}</p>  
              </div>
            ))
          }
        </div>
        <ul className='points-list'>
          {
            data.skills.points.map( (point) => <li key={point.pointno} className='each-point'>{point.text}</li>)
          }
        </ul>
        
      </div>

    </div>
  )
}
