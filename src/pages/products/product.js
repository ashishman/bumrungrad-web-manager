import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Loader from '../../components/Loader/loader';

const Product = () => {

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get('https://packages.bumrungradreferralnepal.com.np/product').then((response) => {
      setPackages(response.data.data)
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
    })
  }, [])
  return (
    <>
      {
        loading ?
          <Loader />
          :
          <>
            <Navbar />
            <div className='container mt-5' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
              {packages?.map((item) => {
                return (
                  <div className="card m-3" style={{ width: "18rem" }}>
                    <img src={`https://packages.bumrungradreferralnepal.com.np/uploads/${item?.image}`} class="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item?.title}</h5>
                      <button onClick={() => navigate(`/packages/${item.id}`)} className="btn btn-danger">View Details</button>
                    </div>
                  </div>
                )
              })}
            </div>
            <Footer />
          </>
      }

    </>
  )
}

export default Product;