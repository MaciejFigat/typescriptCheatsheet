import React from 'react'

interface FooterProps {
  description: string
}

const Footer: React.FC<FooterProps> = ({ description }) => {
  return (
    <footer className='bg-light text-center position-relative footer mt-auto py-3 h-auto'>
      <div className='container'>{description}</div>
    </footer>
  )
}
export default Footer
