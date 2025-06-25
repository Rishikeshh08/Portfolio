import React from 'react'
import firstImg from '../assets/images/first.webp';
import hiImg from '../assets/images/gesture.png';
import myresume from '../assets/RESUME2.pdf';
import githubImg from '../assets/images/github.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import data from '../data';


export const Intro = () => {
  return (
    <div id='resume-b' className='intro outer-box'>

        <div className='intro-box1 inner-box1'>
          <div className="box1">
            <span className='heading'>{data.intro.Heading}</span>
            <img src={hiImg} alt="hi" className='hi-emoji' />
          </div>

          <p className='box2'>{data.intro.Description}</p>

          <div className='box3'>
            <div className='icons-box'>
              <a href={data.reqiredLinks.github} target='_blank' rel="noopener noreferrer"><img src={githubImg} alt="github" className='icons sh' /></a> 
            </div>
            <div className='icons-box'>
              <a href={data.reqiredLinks.linkedin} target='_blank' rel="noopener noreferrer"><img src={linkedinImg} alt="linkedin" className='icons sh' /></a>
            </div> 
          </div>

          <div className='box4'>
            <a href='#contact-b' className='alink'><button className='btn'>CONTACT ME</button></a>
            <a href={myresume} download="RESUME2" className='alink'>
              <button className='btn'>DOWNLOAD RESUME</button>
            </a>
          </div>
        </div>

        <div className='intro-box2 inner-box2'>
            <img src={firstImg} alt="intro" className='img-in-div' />
        </div>
    </div>
  )
}
