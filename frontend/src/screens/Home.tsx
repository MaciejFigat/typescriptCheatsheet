import React from 'react'
import AccordionComponent from '../components/AccordionComponent'
import { LinkContainer } from 'react-router-bootstrap'

const Home: React.FC = () => {
  return (
    <>
      <section
        id='showcase'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>Typescript</span> for React{' '}
                <span className='text-success'>my cheatsheet</span>
              </h1>
              <p className='lead my-4'>
                By understanding JavaScript, TypeScript saves you time catching
                errors and providing fixes before you run code. - so{' '}
                <a
                  href='https://www.typescriptlang.org/'
                  className='text-danger'
                >
                  they{' '}
                </a>
                say
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='showcase'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h2>
                <LinkContainer to={'/hooks'}>
                  <span className='text-warning'>Here</span>
                </LinkContainer>{' '}
                you can find <span className='text-info'>TS resources</span>{' '}
                that I use in React development.
              </h2>
              <p className='lead my-4'>
                TypeScript’s
                <a href='https://2ality.com/2018/04/type-notation-typescript.html'>
                  <span className='text-warning'> type notation</span>
                </a>{' '}
                - by 2ality
              </p>
              <p className='lead my-4'>
                Beautiful
                <a href='https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents'>
                  <span className='text-info'> repository</span>
                </a>{' '}
                - contains further links
              </p>
              <p className='lead my-4'>
                Official
                <a href='https://www.typescriptlang.org/play?q=469#example/conditional-types'>
                  <span className='text-success'> playground</span>
                </a>{' '}
              </p>
              <p className='lead my-4'>
                Official
                <a href='https://www.typescriptlang.org/'>
                  <span className='text-danger'> documentation</span>
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='showcase'
        className='bg-dark text-light p-2 p-lg-0 pt-lg-5 h-100 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <AccordionComponent
                titleMain='Main title'
                titleOne='Links to resources'
                descOne='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                linkOne='link to a new world.com'
              />
            </div>
            <div>
              {' '}
              <AccordionComponent
                titleOne='Links to resources'
                descOne='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                linkOne='link to a new world.com'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
