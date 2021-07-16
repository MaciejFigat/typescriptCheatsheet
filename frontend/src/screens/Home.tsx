import React from 'react'

interface HomeProps {

}

const Home: React.FC<HomeProps> = ({}) => {
    return (<section
        id='showcase'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>Typescript</span> for React
              </h1>
              <p className='lead my-4'>
                npx create-react-app projectXXX --template typescript
              </p>
              
              <div
                className='modal fade'
                id='popupOne'
                
                aria-labelledby='popupOneModal'
                aria-hidden='true'
              >
                <div className='modal-dialog text-dark4'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='popupOneLabel'>
                        Title of excellent quality and insight
                      </h5>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      Here will be content. It will be bananas.
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                      <button type='button' className='btn btn-primary'>
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            
          </div>
        </div>
      </section>)
}
export default Home