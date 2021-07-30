import React from 'react'
// import AccordionComponent from '../components/AccordionComponent'
import { LinkContainer } from 'react-router-bootstrap'
import CardComponent from '../components/CardComponent'
const Home: React.FC = () => {
  return (
    <div className='min-vh-100'>
      <section
        id='showcase'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
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
                that I use in React development
              </h2>
            </div>

            <CardComponent
              variantCard='info'
              title='Basics of TS - by 2ality'
              description='Repository - contains further links'
              link='https://2ality.com/2018/04/type-notation-typescript.html'
              linkDescription='Visit 2ality'
              variantButton='secondary'
            />
            <CardComponent
              variantCard='light'
              title='Useful repo'
              description='Repository - contains further links'
              link='https://github.com/typescript-cheatsheets/react/blob/main/README.md#basic-cheatsheet-table-of-contents'
              linkDescription='Visit git repo'
              variantButton='primary'
            />
          </div>
        </div>
      </section>
      <section
        id='showcase'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <CardComponent
              variantCard='dark'
              title='Playground'
              description='Playground with cool samples'
              link='https://www.typescriptlang.org/play?q=469#example/conditional-types'
              linkDescription='Go and play'
              variantButton='warning'
            />
            <CardComponent
              variantCard='success'
              title='Docs'
              description='Official documentation'
              link='https://www.typescriptlang.org/'
              linkDescription='>>TS docs'
              variantButton='danger'
            />
            <div>
              <h2>
                <LinkContainer to={'/props'}>
                  <span className='text-info'>Click on the menu</span>
                </LinkContainer>{' '}
                to find snippets of
                <span className='text-warning'> code</span>{' '}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
