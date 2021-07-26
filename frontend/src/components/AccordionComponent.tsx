import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
// import { Accordion } from 'react-bootstrap'

import Card from 'react-bootstrap/Card'

// import Button from 'react-bootstrap/Button'
interface AccordionProps {
  link: string
  titleOne: string
  descOne: string
}
interface AccordionStateProps {
  status: 'open' | 'collapsed'
  statusText: 'show' | 'collapse'
}

const AccordionComponent: React.FC<AccordionProps> = ({
  link,
  titleOne,
  descOne,
}) => {
  const [accordionOne, setAccordionOne] = useState<AccordionStateProps>({
    status: 'open',
    statusText: 'show',
  })

  const accOneHandler = () => {
    if (accordionOne.status === 'collapsed') {
      setAccordionOne({ status: 'open', statusText: 'show' })
      console.log(accordionOne.statusText)
    } else if (accordionOne.status === 'open') {
      setAccordionOne({ status: 'collapsed', statusText: 'collapse' })
      console.log(accordionOne.statusText)
    } else {
      console.log(accordionOne.statusText)
    }
  }
  // const accOneHandler = () => {
  //   if (statusOne === 'collapsed') {
  //     setStatusOne('open')
  //     console.log(statusOne)
  //   } else {
  //     setStatusOne('collapsed')
  //     console.log(statusOne)
  //   }
  // }

  return (
    <section id='sectionAccord' className='p-5 w-100'>
      <div className='container'>
        <h2 className='text-center mb-4'>Most important questions</h2>

        <Accordion defaultActiveKey='0' className='text-dark'>
          <Card className='bg-light'>
            <Card.Header as='div' className='text-center bg-light'>
              <Accordion.Toggle
                className='bg-light'
                as={Card.Header}
                variant='link'
                eventKey='0'
              >
                title 1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>body 1</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header as='div' className='text-center bg-light'>
              <Accordion.Toggle
                className='bg-light'
                as={Card.Header}
                variant='link'
                eventKey='1'
              >
                title 2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>body 2</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </section>
  )
}
export default AccordionComponent
