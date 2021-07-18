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
  const [menuOpen, setMenuOpen] = useState(false)
  const menuHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top'>
      <div className='container'>
        {' '}
        <LinkContainer to={'/home'}>
          <div className='navbar-brand'>React.tsx</div>
        </LinkContainer>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'
          onClick={menuHandler}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navmenu'>
          <ul className='navbar-nav ms-auto'>
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
            <li className='nav-item'>
              <a href='#propsId' className='nav-link'>
                Props
              </a>
            </li>
            <li className='nav-item'>
              <a href='#showcase' className='nav-link'>
                First Link
              </a>
            </li>
            <li className='nav-item'>
              <a href='#sectionTwo' className='nav-link'>
                Second Link
              </a>
            </li>
            <li className='nav-item'>
              <a href='#sectionThree' className='nav-link'>
                Third Link
              </a>
            </li>
            <li className='nav-item'>
              <a href='#sectionAccord' className='nav-link'>
                The last one
              </a>
            </li>
            <NavDropdown
              title='dropdownTitle'
              drop={'down'}
              id={'dropdown-button-drop-left'}
            >
              <LinkContainer to={'/'}>
                <NavDropdown.Item>Stats</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/hooks'>
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
