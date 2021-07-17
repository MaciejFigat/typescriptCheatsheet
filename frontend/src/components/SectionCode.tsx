import React from 'react'
import CodeHighlight from './CodeHighlight'

interface SectionCodeProps {
    title: string
    description: string
    codeExample: string
}

const SectionCode: React.FC<SectionCodeProps> = ({title, description, codeExample}) => {
        return (
        <section id='sectionTwo' className='p-5 bg-dark text-light'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md'>
            <CodeHighlight codeBlock={codeExample} />
          </div>
          <div className='col-md p-5'>
            <h2>{title}</h2>
            <p className='lead'>{description}</p>
          </div>
        </div>
      </section>
      )
}
export default SectionCode