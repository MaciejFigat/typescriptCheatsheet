import React from 'react'

interface AccordionProps {
  link: string
  titleOne: string
  descOne: string
}

const Accordion: React.FC<AccordionProps> = ({ link, titleOne, descOne }) => {
  return (
    <section id='sectionAccord' className='p-5'>
      <div className='container'>
        <h2 className='text-center mb-4'>Most important questions</h2>
        <div className='accordion accordion-flush' id='accordionOne'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingOne'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#firstQuestion'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                How are You motivated?
              </button>
            </h2>
            <div
              id='firstQuestion'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionOne'
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
                data-bs-toggle='collapse'
                data-bs-target='#secondQuestion'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                What is a banana?
              </button>
            </h2>
            <div
              id='secondQuestion'
              className='accordion-collapse collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionOne'
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
                data-bs-toggle='collapse'
                data-bs-target='#thirdQuestion'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                How much do You actually like it?
              </button>
            </h2>
            <div
              id='thirdQuestion'
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
                data-bs-target='#fourthQuestion'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                Do You foresee anything happening?
              </button>
            </h2>
            <div
              id='fourthQuestion'
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
      </div>
    </section>
  )
}
export default Accordion
