import React from 'react'
import { TbCertificate } from "react-icons/tb";

export const CertificateCard = ({cert}) => {
  return (
    <div className='certificate-card'>
        <div className='certificate-card-title'>
            <span>
                <TbCertificate className='card-icon cert-icon' />
            </span> 
            <span className='card-name'>{cert.name}</span>
        </div>
        <div className='certificate-card-org'>
            <p className='card-description'>{cert.org}</p>
        </div>
        <a href={cert.pdf} target='_blank' rel='noreferrer' className='certificate-card-link'>
            <button className='btn'>View Certificate</button>
        </a>

    </div>
  )
}
