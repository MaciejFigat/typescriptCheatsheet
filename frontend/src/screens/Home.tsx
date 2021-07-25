import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
const Home: React.FC = () => {
  return (
    <>
      <section
        id='showcase'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>Typescript</span> for React{' '}
                <span className='text-success'>my cheatsheet</span>
              </h1>
              <p className='lead my-4'>
                npx create-react-app projectXXX --template typescript
              </p>
            </div>
            <AccordionComponent
              titleOne='Title 1'
              descOne='desc1'
              link='link to a new world.com'
            />
          </div>
        </div>
      </section>
      <section
        id='showcase'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>Typescript</span> for React{' '}
                <span className='text-success'>my cheatsheet</span>
              </h1>
              <p className='lead my-4'>
                npx create-react-app projectXXX --template typescript
              </p>
            </div>
            <AccordionComponent
              titleOne='Title 1'
              descOne='desc1'
              link='link to a new world.com'
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
