import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import siteLogo from '../../sitelogo.png';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer-bg">
      <div className=' mx-5 row'>
        <div className='col-md-12 col-lg-6 flex-utils my-5'>
          <img src={siteLogo} class="card-img-top footer-logo" alt="..." />
          <p>Our Clinic has grown to provide a world class facility for the clinic
            advanced restorative heart treatments. We’re among the most
            q ualified Cardiologists over 20 years.</p>
        </div>
        <div className='col-md-12 col-lg-3 flex-utils my-5'>
          <div>
            <h3>ACTION</h3>
            <div className='footer-underline'></div>
          </div>
          <ul className='mt-4'>
            <li> <a className='footer-link' onClick={() => navigate('/')}>Home</a> </li>
            <li><a className='footer-link' onClick={() => navigate('/about')}>About</a></li>
            <li><a className='footer-link' onClick={() => navigate('/packages')}>Packages</a></li>
            <li><a className='footer-link' onClick={() => navigate('/contact-us')}>Contact us</a></li>
            <li><a className='footer-link' onClick={() => navigate('/appointment')}>Book Appointment</a></li>
          </ul>
        </div>
        <div className='col-md-12 col-lg-3 flex-utils my-5'>
          <div>
            <h3>CONTACT</h3>
            <div className='footer-underline'></div>
          </div>
          <div className='mt-4'>
            <strong >Call : +977-9851020051/9851163088</strong><br />
            <strong>Email : dpshresths@gmail.com</strong><br />
            <strong>Locate: Kumari Marg, Kathmandu</strong><br />
            <strong>Time : Sun - Sat 09AM - 06PM</strong><br />
          </div>
        </div>
      </div>
      <div className='footer-line'></div>
      <div className='footer-copyright my-4'>
        <strong className='text-center'>© 2022 Bumrungrad International Hospital Referral Office Nepal</strong>
        <strong className='text-center'>All Rights Reserved</strong>
      </div>
    </footer>
  )
}

export default Footer;