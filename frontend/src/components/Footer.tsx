import React from 'react'

interface FooterProps {
  description: string
}

const Footer: React.FC<FooterProps> = ({ description }) => {
  return (
    <footer className='p-3 bg-danger text-white text-center position-relative'>
      <div className='container'>
        <p className='lead'>{description}</p>
        <a href='/#' className='position-absolute bottom-0 end-0 p-3'>
          <i className='bi bi-arrow-up-square-fill text-light h1'></i>
        </a>
      </div>
    </footer>
  )
}
export default Footer
