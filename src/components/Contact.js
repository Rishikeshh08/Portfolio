import React from 'react'
import data from '../data'
import githubImg from '../assets/images/github.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import { LuContactRound } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


export const Contact = () => {
  return (
    <div id='contact-b' className='contact'>
      <p className='heading'>{data.contact.Heading}</p>
      <div className='card-description contact-desc'>
        <p className='desc'>{data.contact.Description}</p>
        <p>Rishikesh Mandlik</p>
        <p><span><LuContactRound className='card-icon'/></span>7020538957</p>
        <p><span><FaLocationDot className='card-icon'/></span>Nagpur, Maharashtra</p>
        <p><span><MdOutlineEmail className='card-icon'/></span>rishikeshmandlik08@gmail.com</p>
      </div>
      
      <div className='contact-icon-box'>
        <div className='icons-box'>
          <a href={data.reqiredLinks.github} target='_blank' rel="noopener noreferrer"><img src={githubImg} alt="github" className='icons sh' /></a> 
        </div>
        <div className='icons-box'>
          <a href={data.reqiredLinks.linkedin} target='_blank' rel="noopener noreferrer"><img src={linkedinImg} alt="linkedin" className='icons sh' /></a>
        </div> 
      </div>
    </div>
  )
}
