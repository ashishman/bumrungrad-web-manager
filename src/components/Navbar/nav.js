import React from 'react';

import './style.css'

const Nav = () => {

  return (
    <div className='nav-bar d-flex justify-content-between'>
        <div className='ph-number-section mx-5'>
            <h5 className='company-details animate__animated animate__backInUp'>+977 9823807640</h5>
            <span>Give us a Call</span>
        </div>
        <div className='line-sepreter mx-5'></div>

        <div className='ph-number-section mx-5'>
            <h5 className='company-details animate__animated animate__backInUp'>info@example.com</h5>
            <span>Send us email</span>
        </div>
        <div className='line-sepreter mx-5'></div>

        <div className='ph-number-section mx-5'>
            <h5 className='company-details animate__animated animate__backInUp'>MON - FRI : 8:00 AM - 7:00 PM</h5>
            <span>Sat -Sun : Closed</span>
        </div>
        <div className='line-sepreter mx-5'></div>
        
    </div>
  )
}

export default Nav;