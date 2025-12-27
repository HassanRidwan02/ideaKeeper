import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/NavbarComponents/Nav';
import Home from './components/HomeComponents/Home';
import About from './components/NavbarComponents/About';
import Contact from './components/NavbarComponents/Contact';
import Ideas from './components/IdeasComponents/Idea'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ideas" element={<Ideas />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
