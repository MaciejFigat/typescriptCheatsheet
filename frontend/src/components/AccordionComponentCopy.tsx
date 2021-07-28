import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
interface AccordionComponentCopyProps {}
interface AccordionStateProps {
  status: 'open' | 'collapsed'
  statusText: 'show' | 'collapse'
}
const AccordionComponentCopy: React.FC<AccordionComponentCopyProps> = ({}) => {
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
    <>
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
              adipisicing elit. Veritatis perspiciatis tenetur rem voluptatibus
              temporibus vel numquam omnis, error minima commodi.
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
              adipisicing elit. Veritatis perspiciatis tenetur rem voluptatibus
              temporibus vel numquam omnis, error minima commodi.
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ea
              harum voluptatibus magnam nesciunt corporis quisquam tempora fuga
              illo aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Temporibus mollitia repellendus dolorem sed eum consequatur,
              iure expedita ad quasi commodi.
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
              id enim neque repudiandae? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Amet, officia!
            </div>
          </div>
        </div>
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
    </>
  )
}
export default AccordionComponentCopy
