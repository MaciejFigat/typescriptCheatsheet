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
  const [menuOpen, setMenuOpen] = useState('')
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
              <NavDropdown.Item>
                {' '}
                <NavHashLink
                  smooth
                  to='/hooks/#partOne'
                  activeClassName='selected'
                >
                  part 1
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                {' '}
                <NavHashLink
                  smooth
                  to='/hooks/#partTwo'
                  activeClassName='selected'
                >
                  part 3
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <NavHashLink
                  smooth
                  to='/hooks/#partThree'
                  activeClassName='selected'
                >
                  part 3
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
              <NavDropdown.Item>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#basic'
                  activeClassName='selected'
                >
                  Basic props
                </NavHashLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#partOne'
                  activeClassName='selected'
                >
                  part 1
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                {' '}
                <NavHashLink
                  smooth
                  to='/props/#partTwo'
                  activeClassName='selected'
                >
                  part 3
                </NavHashLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
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
              <LinkContainer to={'/misc/#partOne'}>
                <NavDropdown.Item>Literals</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/misc/#partSix'>
                <NavDropdown.Item>Settings</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
