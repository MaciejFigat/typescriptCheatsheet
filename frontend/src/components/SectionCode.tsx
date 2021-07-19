import React from 'react'
import CodeHighlight from './CodeHighlight'

interface SectionCodeProps {
  title: string
  description: string
  codeExample: string
  sectionID: string
}

const SectionCode: React.FC<SectionCodeProps> = ({
  sectionID,
  title,
  description,
  codeExample,
}) => {
  return (
    <section id={sectionID} className='p-5 bg-dark text-light'>
      <div className='row align-items-center justify-content-between'>
        <div
          className='col-md'
          style={{ maxWidth: '45rem', minWidth: 'fit-content' }}
        >
          <CodeHighlight codeBlock={codeExample} />
        </div>
        <div className='col-md p-5'>
          <div
            className='card border-success mb-3'
            style={{ maxWidth: '20rem' }}
          >
            {title !== '' && <div className='card-header'>{title}</div>}
            <div className='card-body'>
              <p className='card-text'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionCode
