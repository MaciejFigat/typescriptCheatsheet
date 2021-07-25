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
        <div className='accordion accordion-flush' id='accordionOne'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingOne'>
              <button
                className={`accordion-button ${accordionOne.status}`}
                type='button'
                onClick={accOneHandler}
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                How are You motivated?
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${accordionOne.statusText}`}
              aria-labelledby='flush-headingOne'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                temporibus dolor iusto nobis magnam ratione pariatur ab delectus
                nemo laudantium. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veritatis perspiciatis tenetur rem
                voluptatibus temporibus vel numquam omnis, error minima commodi.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                What is a banana?
              </button>
            </h2>
            <div
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                temporibus dolor iusto nobis magnam ratione pariatur ab delectus
                nemo laudantium. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veritatis perspiciatis tenetur rem
                voluptatibus temporibus vel numquam omnis, error minima commodi.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                How much do You actually like it?
              </button>
            </h2>
            <div
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingTwo'
              data-bs-parent='#accordionOne'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                ea harum voluptatibus magnam nesciunt corporis quisquam tempora
                fuga illo aliquam. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus mollitia repellendus dolorem sed
                eum consequatur, iure expedita ad quasi commodi.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                Do You foresee anything happening?
              </button>
            </h2>
            <div
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingThree'
              data-bs-parent='#accordionOne'
            >
              <div className='accordion-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                optio iure voluptate aliquam impedit, quam asperiores eveniet,
                quaerat architecto expedita id adipisci eum atque! Esse deleniti
                id enim neque repudiandae? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Amet, officia!
              </div>
            </div>
          </div>
        </div>
        <Accordion className='text-dark'>
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
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant='link' eventKey='1'>
                title 2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>body 2</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  )
}
export default AccordionComponent
