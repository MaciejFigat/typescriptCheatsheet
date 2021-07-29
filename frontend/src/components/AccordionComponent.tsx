import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { AnimateSharedLayout } from 'framer-motion'
import Card from 'react-bootstrap/Card'

interface AccordionProps {
  titleMain?: string
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
  titleMain,
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
    <AnimateSharedLayout>
      <section id='sectionAccord' className='p-3'>
        <div className='container '>
          {titleMain && <h2 className='text-center mb-4'>{titleMain}</h2>}
          <Accordion
            defaultActiveKey='0'
            className='text-dark bg-light min-vw-50'
          >
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
    </AnimateSharedLayout>
  )
}
export default AccordionComponent
