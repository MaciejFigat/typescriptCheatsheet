import React from 'react'
import CodeHighlight from './CodeHighlight'

interface SectionCodeProps {
  title: string
  description: string
  codeExample: string
  sectionID: string
  version?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'danger'
    | 'dark'
    | ''
}

const SectionCode: React.FC<SectionCodeProps> = ({
  sectionID,
  title,
  description,
  codeExample,
  version,
}) => {
  return (
    <>
      {title !== '' && (
        <section className='bg-info text-light p-5'>
          <div className='container'>
            <div className='d-md-flex justify-content-between align-items-center'>
              <h3 className='mb-3 mb-md-0'>{title}</h3>
            </div>
          </div>
        </section>
      )}
      <section id={sectionID} className='p-5 bg-dark text-light'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md p-5'>
            {version !== undefined && (
              <div
                className={`card text-white bg-${version} mb-3`}
                style={{ maxWidth: '20rem' }}
              >
                {title !== '' && <div className='card-header'>{title}</div>}
                <div className='card-body'>
                  <p className='card-text'>{description}</p>
                </div>
              </div>
            )}
            {version === undefined && (
              <div
                className={`card text-dark bg-light mb-3`}
                style={{ maxWidth: '20rem' }}
              >
                {title !== '' && <div className='card-header'>{title}</div>}
                <div className='card-body'>
                  <p className='card-text'>{description}</p>
                </div>
              </div>
            )}
          </div>
          <div
            className='col-md'
            style={{ maxWidth: '45rem', minWidth: 'fit-content' }}
          >
            <CodeHighlight codeBlock={codeExample} />
          </div>
        </div>
      </section>
    </>
  )
}
export default SectionCode
