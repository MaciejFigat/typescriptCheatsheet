import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

import Card from 'react-bootstrap/Card'

interface AccordionProps {
  linkOne: string
  titleOne: string
  descOne: string
  linkTwo?: string
  titleTwo?: string
  descTwo?: string
  linkThree?: string
  titleThree?: string
  descThree?: string
}

const AccordionComponent: React.FC<AccordionProps> = ({
  linkOne,
  titleOne,
  descOne,
  linkTwo,
  titleTwo,
  descTwo,
  linkThree,
  titleThree,
  descThree,
}) => {
  return (
    <section id='sectionAccord' className='p-5 w-100'>
      <div className='container'>
        <h2 className='text-center mb-4'>{titleOne}</h2>
        <Accordion defaultActiveKey='0' className='text-dark bg-light'>
          <Card>
            <Card.Header as='div' className='text-center bg-light'>
              <Accordion.Toggle
                className='bg-light'
                as={Card.Header}
                variant='link'
                eventKey='0'
              >
                {linkOne}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body className='bg-warning'>{descOne}</Card.Body>
            </Accordion.Collapse>
          </Card>
          {titleTwo && (
            <Card>
              <Card.Header as='div' className='text-center bg-light'>
                <Accordion.Toggle
                  className='bg-light'
                  as={Card.Header}
                  variant='link'
                  eventKey='1'
                >
                  {titleTwo}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='1'>
                <Card.Body className='bg-info'>{descTwo}</Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
          {titleThree && (
            <Card>
              <Card.Header as='div' className='text-center bg-light'>
                <Accordion.Toggle
                  className='bg-light'
                  as={Card.Header}
                  variant='link'
                  eventKey='2'
                >
                  {titleThree}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='2'>
                <Card.Body className='bg-success'>{descThree}</Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
        </Accordion>
      </div>
    </section>
  )
}
export default AccordionComponent
