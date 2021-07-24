import React from 'react'

interface FooterProps {
  description: string
}

const Footer: React.FC<FooterProps> = ({ description }) => {
  return (
    <footer className='bg-light text-center position-relative footer mt-auto py-3'>
      <div className='container'>
        <p className='lead'>{description}</p>
      </div>
    </footer>
  )
}
export default Footer
