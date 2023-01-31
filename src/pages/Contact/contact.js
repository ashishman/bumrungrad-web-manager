import React from 'react'
import ceoImg from '../../ceo.jpg'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar'
import './style.css'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='contact-main'>
                <div class="section-title">
                    <span>Contact us</span>
                    <h2>Contact us</h2>
                    <div className='text-underline mb-5'></div>
                </div>
                <iframe width="100%" height="400px" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.8406242475069!2d85.32855588613346!3d27.72127489081042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190d0c0cd0a1%3A0xe0e6aef5a9eb8dbc!2sBumrungrad%20International%20Hospital%20Referral%20Office!5e0!3m2!1sen!2snp!4v1665507414544!5m2!1sen!2snp" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4);" }}></iframe>
            </div>
            {/* <!-- ======= Team Section ======= --> */}
            <section id="team" class="team">
                <div class="container">

                    <div class="section-title">
                        <span>Our Team</span>
                        <h2>Our Team</h2>
                        <div className='text-underline mb-5'></div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                            <div class="member">
                                <img src={ceoImg} alt="" />
                                <h4>Dinesh Shrestha</h4>
                                {/* <span>Chief Executive Officer</span> */}
                                <p style={{ marginBottom: '0px' }}>
                                    Contact No: 9851029951<br />
                                    Email: dpshresths@gmail.com
                                </p>

                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                            <div class="member">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                                <h4>Aditya Shrestha</h4>
                                {/* <span>Product Manager</span> */}
                                <p>
                                    Contact No: 9851163088<br />
                                    Email: aditya.sh.gmail.com<br />
                                    Viber: 9851163088<br />
                                    Whats app: 9851163088<br />
                                </p>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                            <div class="member">
                                <img src="https://i.pinimg.com/originals/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg" alt="" />
                                <h4>Office</h4>
                                {/* <span>CTO</span> */}
                                <p>
                                    01-4444067<br />
                                    01-4444074<br />
                                    01-4413199<br />
                                </p>
                                <div class="social">
                                    <a href=""><i class="bi bi-twitter"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End Team Section --> */}
            <Footer/>
        </>
    )
}

export default Contact;