import Navbar from './components/NavbarComponents/index'
import Home from './components/Home'
import Button from './components/Reusables/Button'
import About from './components/NavbarComponents/About'
import Contact from './components/NavbarComponents/Contact'


export default function Nav(){
    return (
    <BrowserRouter>
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


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    )
}