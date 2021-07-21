import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import {
  // Navbar,
  // Nav,
  // Container,
  NavDropdown,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
interface NavProps {}

const Navigation: React.FC<NavProps> = () => {
  const [menuOpen, setMenuOpen] = useState<string>('')
  const menuHandler = () => {
    if (menuOpen === '') {
      setMenuOpen('show')
    } else {
      setMenuOpen('')
    }
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'>
      <div className='container'>
        {' '}
        <LinkContainer to={'/home'}>
          <div className='navbar-brand'>React.tsx</div>
        </LinkContainer>
        <button className='navbar-toggler' type='button' onClick={menuHandler}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen}`} id='navmenu'>
          <ul className='navbar-nav ms-auto'>
            {/* Dropdown for hooks section */}
            <NavDropdown
              title='Hooks'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              {/*NavDropdown.Item as='button' I use it to avoid nesting a<a - which React warns me about and caused me suprising amount of grief*/}
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/hooks#partOne'
                  activeClassName='selected'
                >
                  useState
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/hooks#partFour'
                  activeClassName='selected'
                >
                  useRef & useReducer
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to='/hooks#partEight'
                  activeClassName='selected'
                >
                  hooks and children
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* end of the dropdown for Hooks */}

            {/* dropdown for Props section */}
            <NavDropdown
              title='Props'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#basic'
                  activeClassName='selected'
                >
                  Basic props
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#partOne'
                  activeClassName='selected'
                >
                  part 1
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#partTwo'
                  activeClassName='selected'
                >
                  part 3
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to='/props/#partThree'
                  activeClassName='selected'
                >
                  part 3
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* end of Props section dropdown */}

            {/* Dropdown for misc section */}
            <NavDropdown
              title='Miscellaneous'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/misc#partOne'}
                  activeClassName='selected'
                >
                  Literals part 1
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/misc#partThree'}
                  activeClassName='selected'
                >
                  Literals part 2
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item as='button'>
                <NavHashLink
                  smooth
                  to={'/misc#partFour'}
                  activeClassName='selected'
                >
                  Literals part 3
                </NavHashLink>
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
