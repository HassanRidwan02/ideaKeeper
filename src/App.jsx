import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/NavbarComponents/Nav';
import Home from './components/HomeComponents/Home';
import About from './components/NavbarComponents/About';
import Contact from './components/NavbarComponents/Contact';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
