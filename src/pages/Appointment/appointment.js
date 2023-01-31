import React, { useRef, useState } from 'react'
import axios from 'axios';

import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Loader from '../../components/Loader/loader';
import './style.css'

const Appointment = () => {

    const [fullName, setFullName] = useState();
    const [hospitalNo, setHospitalNo] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [passportNo, setPassportNo] = useState();
    const [nationality, setNationality] = useState();
    const [countryOfResidence, setCountryOfResidence] = useState();
    const [preferredAppointmentDate, setPreferredAppointmentDate] = useState();
    const [preferredAppointmentTime, setPreferredAppointmentTime] = useState();
    const [specificConcern, setSpecificConcern] = useState();
    const [preferredDoctor, setPreferredDoctor] = useState();
    const [purposeOfAppointment, setPurposeOfAppointment] = useState();
    const [availableInvestigation, setAvailableInvestigation] = useState();
    const [requestForInterpreter, setRequestForInterpreter] = useState();
    const [insuranceDocumentFront, setInsuranceDocumentFront] = useState();
    const [insuranceDocumentBack, setInsuranceDocumentBack] = useState();
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();

        let image = new FormData();
        image.append("image", insuranceDocumentFront)

        let img = new FormData();
        img.append("img", insuranceDocumentBack);

        if (insuranceDocumentFront === undefined && insuranceDocumentBack === undefined) {
            const appointmentDetails = {
                fullName, hospitalNo, dateOfBirth, passportNo, nationality
                , countryOfResidence, preferredAppointmentDate, preferredAppointmentTime, specificConcern
                , preferredDoctor, purposeOfAppointment, availableInvestigation, requestForInterpreter
            }
            axios.post('https://email.bumrungradreferralnepal.com.np/mail', { appointmentDetails })
                .then((response) => {
                    setShowMessage(true)
                    setLoading(false)
                }).catch(err => setLoading(false))
        } else {
            axios.post("https://email.bumrungradreferralnepal.com.np/uploader/file1/upload", image).then((res) => {
                axios.post("https://email.bumrungradreferralnepal.com.np/uploader/file2/upload", img).then((res) => {
                    const appointmentDetails = {
                        fullName, hospitalNo, dateOfBirth, passportNo, nationality
                        , countryOfResidence, preferredAppointmentDate, preferredAppointmentTime, specificConcern
                        , preferredDoctor, purposeOfAppointment, availableInvestigation, requestForInterpreter
                    }
                    axios.post('https://email.bumrungradreferralnepal.com.np/mail', { appointmentDetails })
                        .then((response) => {
                            setShowMessage(true)
                            setLoading(false)
                        }).catch(err => setLoading(false))
                }).catch(err => setLoading(false))

            }).catch(err => setLoading(false))
        }
        e.target.reset();
    }

    return (
        <>
            {showMessage && (
                <div className="alert alert-success text-center mt-3" role="alert">
                    Your request has been received!
                </div>
            )}
            {
                loading
                    ?
                    <Loader />
                    :
                    <>
                        <Navbar />
                        <div className='info-wrapper'>
                            <div className='main'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <h2 className='d-flex justify-content-center heading-text'>Basic Information</h2>
                                    <hr />

                                    <div className='row'>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Full Name:</label>
                                            <input type="text" className="form-control" required onChange={(e) => setFullName(e.target.value)} name='fullname' aria-describedby="emailHelp" placeholder="Full Name" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Hospital No:</label>
                                            <input type="text" className="form-control" name='hospital_no' onChange={(e) => setHospitalNo(e.target.value)} aria-describedby="emailHelp" placeholder="Hospital No" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Date of Birth:</label>
                                            <input type="date" className="form-control" required name='dof' aria-describedby="emailHelp" onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Date of Birth" />
                                        </div>

                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Passport No / ID:</label>
                                            <input type="text" className="form-control" required name='passport_no' aria-describedby="emailHelp" onChange={(e) => setPassportNo(e.target.value)} placeholder="Passport No" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Nationality:</label>
                                            <input type="text" className="form-control" name='nationality' aria-describedby="emailHelp" onChange={(e) => setNationality(e.target.value)} placeholder="Nationality" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Country of Residence:</label>
                                            <input type="text" className="form-control" name="country" aria-describedby="emailHelp" onChange={(e) => setCountryOfResidence(e.target.value)} placeholder="Country" />
                                        </div>
                                    </div>

                                    <h2 className='d-flex justify-content-center mt-5 heading-text'>Appointment Details</h2>
                                    <hr />
                                    <div className='row'>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Preferred Appointment Date:</label>
                                            <input type="date" className="form-control" required name='pad' aria-describedby="emailHelp" onChange={(e) => setPreferredAppointmentDate(e.target.value)} placeholder="Preferred Appointment Date" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Preferred Appointment Time:</label>
                                            <input type="text" className="form-control" name='pat' aria-describedby="emailHelp" onChange={(e) => setPreferredAppointmentTime(e.target.value)} placeholder="Preferred Appointment Time" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Preferred Doctor:</label>
                                            <input type="text" className="form-control" name="preferred_doctor" onChange={(e) => setPreferredDoctor(e.target.value)} aria-describedby="emailHelp" placeholder="Preferred Doctor" />
                                        </div>

                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Purpose of Appointment:</label>
                                            <input type="text" className="form-control" name='poa' aria-describedby="emailHelp" onChange={(e) => setPurposeOfAppointment(e.target.value)} placeholder="Purpose of Appointment" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Available Investigation:</label>
                                            <input type="text" className="form-control" name='available_investigation' onChange={(e) => setAvailableInvestigation(e.target.value)} aria-describedby="emailHelp" placeholder="Available Investigation" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Request for Interpreter:</label>
                                            <input type="text" className="form-control" name="roi" aria-describedby="emailHelp" onChange={(e) => setRequestForInterpreter(e.target.value)} placeholder="Request for Interpreter" />
                                        </div>

                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Specific Concern:</label>
                                            <input type="text" className="form-control" name='specific_concern' onChange={(e) => setSpecificConcern(e.target.value)} aria-describedby="emailHelp" placeholder="Specific Concern" />
                                        </div>
                                    </div>
                                    <h2 className='d-flex justify-content-center mt-5 heading-text'>Payment Method</h2>
                                    <hr />
                                    <div className='row'>

                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Insurance Document (front):</label>
                                            <input type="file" className="form-control" multiple name='insurance_front' onChange={(e) => setInsuranceDocumentFront(e.target.files[0])} aria-describedby="emailHelp" placeholder="Insurance Document (front)" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Insurance Document (back):</label>
                                            <input type="file" className="form-control" name='insurance_back' onChange={(e) => setInsuranceDocumentBack(e.target.files[0])} aria-describedby="emailHelp" placeholder="Insurance Document (back)" />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <input className='btn btn-outline-danger col-lg-3 mt-5' type="submit" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Footer />
                    </>
            }

        </>
    )
}

export default Appointment;