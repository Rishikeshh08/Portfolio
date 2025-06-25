import React from 'react'
import data from '../data'
import { CertificateCard } from './CertificateCard'

export const Certificates = () => {
  return (
    <div className='certificates'>
      <p className='heading'>Certificates</p>
      <div className='certificates-list'>
        {
          data.certificates.map( (cert) => <CertificateCard key={cert.id} cert={cert} /> )
        }
        </div>
    </div>
  )
}
