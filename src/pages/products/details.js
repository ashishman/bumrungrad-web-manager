import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './style.css'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Loader from '../../components/Loader/loader';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [packages, setPackages] = useState([]);
  console.log("🚀 ~ file: details.js:15 ~ Details ~ packages", packages)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://packages.bumrungradreferralnepal.com.np/product/${id}`).then((response) => {
      setPackages(response?.data?.data?.[0])
      setLoading(false);
    }).catch((err) => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {
        loading
          ?
          <Loader />
          :
          <>
            <Navbar />
            <div className='container mt-5'>
              <img src={`https://packages.bumrungradreferralnepal.com.np/uploads/${packages?.image}`} className="img-fluid" style={{ height: '350px', width: 'inherit' }} alt="Responsive image" />
              <h2 className='mt-4 text-danger'>{packages?.title}</h2>
              <div className='d-flex justify-content-between table-style'>
                <table class="table my-5 col-xs-12 col-sm-12 col-md-5 col-lg-5">
                  <thead>
                    <tr className='bg-danger'>
                      <th colSpan={2} className="text-white">Package Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages?.description?.map((item, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{item?.desc}</td>
                        </tr>
                      )
                    })}

                  </tbody>
                </table>

                <table class="table my-5 col-xs-12 col-sm-12 col-md-5 col-lg-5">
                  <thead>
                    <tr className='bg-danger'>
                      <th colSpan={2} className="text-white">Terms and Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages?.terms_condition?.map((item, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{item?.terms}</td>
                        </tr>
                      )
                    })}

                  </tbody>
                </table>
              </div>
              <div className='bg-danger my-5 d-flex justify-content-around align-items-center' style={{ width: '100%', height: '100px' }}>
                <div className='call-btn icon-align'>
                  <a href='tel:9851029951' className='icon-align'>
                    <svg style={{ color: '#ffff' }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <h5 className='mt-3 text-white text-contact'>CALL FOR APPOINTMENT</h5>
                  </a>
                </div>
                <div className='inqury-btn icon-align' onClick={() => navigate('/inqury')}>
                  <svg style={{ color: '#ffff' }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                  </svg>
                  <h5 className='mt-3 text-white text-contact'>SEND AN INQURY</h5>
                </div>
                <div className='inqury-btn icon-align' onClick={() => navigate('/appointment')}>
                  <svg style={{ color: '#ffff' }} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-calendar-day-fill" viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16v9zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425zm.336.563h-.672v4.105h.672V8.418zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z" />
                  </svg>
                  <h5 className='mt-3 text-white text-contact'>BOOK APPOINTMENT</h5>
                </div>
              </div>

            </div>
            <Footer />
          </>
      }
    </>

  )
}

export default Details;