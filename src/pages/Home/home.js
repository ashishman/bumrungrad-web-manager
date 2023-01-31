import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Crousel from '../../components/Crousel/crousel';
import Navbar from '../../components/Navbar/navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Loader from '../../components/Loader/loader';
import './style.css'

const Home = () => {
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
            {loading ?
                <Loader />
                :
                <>
                    <Navbar />
                    <Crousel />
                    <h1 className='check-title'>Recomended Package</h1>
                    <div className='text-underline'></div>
                    <div className='container mt-5' style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                        {packages?.map((item) => {
                            console.log("🚀 ~ file: home.js:37 ~ {packages?.map ~ item", item)
                            return (
                                <div className="card m-3" style={{ width: "18rem" }}>
                                    <img src={`https://packages.bumrungradreferralnepal.com.np/uploads/${item.image}`} class="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <button onClick={() => navigate(`/packages/${item.id}`)} className="btn btn-danger">View Details</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <button className='btn btn-danger' onClick={() => navigate(`/packages`)} style={{ width: '200px', marginTop: '20px' }}>SEE ALL PACKAGES</button>
                    </div>
                    <Footer />
                </>
            }


        </>
    )

}

export default Home;