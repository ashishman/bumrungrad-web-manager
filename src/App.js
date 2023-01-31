import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom"
import Navbar from './components/Navbar/navbar';
import Nav from './components/Navbar/nav';
import Footer from './components/Footer/footer'
import Packages from './pages/products/product';
import Details from './pages/products/details';
import About from './pages/About/about';
import Appointment from './pages/Appointment/appointment';
import Inqury from './pages/inqury/inqury';
import Contact from './pages/Contact/contact';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<Details />} />
          <Route path="/inqury" element={<Inqury />} />

        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
