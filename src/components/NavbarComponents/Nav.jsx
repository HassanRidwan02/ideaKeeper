import { Link, NavLink } from 'react-router-dom';
import Navbar from './index'
import Button from '../Reusables/Button'

export default function Nav() {
  return (
    <nav>
      <Navbar>
        <Navbar.Logo>
          <Link to='/'>
            IdeaKeeper
          </Link>
        </Navbar.Logo>
        <Navbar.About>
          <ul>
            <li>
              <NavLink to='/about'>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact Us</NavLink>
            </li>
          </ul>
        </Navbar.About>
        <Navbar.CTA>
          <Button>Get Started</Button>
        </Navbar.CTA>
      </Navbar>
    </nav>
  )
}