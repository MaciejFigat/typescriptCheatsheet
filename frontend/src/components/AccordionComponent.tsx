import React from 'react'
// import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
// import { Accordion } from 'react-bootstrap'

import Card from 'react-bootstrap/Card'

// import Button from 'react-bootstrap/Button'
interface AccordionProps {
  link: string
  titleOne: string
  descOne: string
}
// interface AccordionStateProps {
//   status: 'open' | 'collapsed'
//   statusText: 'show' | 'collapse'
// }

const AccordionComponent: React.FC<AccordionProps> = ({
  link,
  titleOne,
  descOne,
}) => {
  // const [accordionOne, setAccordionOne] = useState<AccordionStateProps>({
  //   status: 'open',
  //   statusText: 'show',
  // })

  // const accOneHandler = () => {
  //   if (accordionOne.status === 'collapsed') {
  //     setAccordionOne({ status: 'open', statusText: 'show' })
  //     console.log(accordionOne.statusText)
  //   } else if (accordionOne.status === 'open') {
  //     setAccordionOne({ status: 'collapsed', statusText: 'collapse' })
  //     console.log(accordionOne.statusText)
  //   } else {
  //     console.log(accordionOne.statusText)
  //   }
  // }
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
        <Accordion defaultActiveKey='0' className='text-dark bg-light'>
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
              <Card.Body className='bg-warning'>body 1</Card.Body>
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
              <Card.Body className='bg-info'>body 2</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header as='div' className='text-center bg-light'>
              <Accordion.Toggle
                className='bg-light'
                as={Card.Header}
                variant='link'
                eventKey='2'
              >
                title 3
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body className='bg-success'>body 2</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      {/*  @ts-ignore */}
      <Accordion defaultActiveKey='0'>
        {/* @ts-ignore: */}
        <Accordion.Item eventKey='0'>
          {/*  @ts-ignore */}
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          {/*  @ts-ignore */}
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/*  @ts-ignore */}
          </Accordion.Body>
          {/*  @ts-ignore */}
        </Accordion.Item>
        {/*  @ts-ignore */}
        <Accordion.Item eventKey='1'>
          {/*  @ts-ignore */}
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          {/*  @ts-ignore */}
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {/*  @ts-ignore */}
          </Accordion.Body>
          {/*  @ts-ignore */}
        </Accordion.Item>
      </Accordion>
    </section>
  )
}
export default AccordionComponent
