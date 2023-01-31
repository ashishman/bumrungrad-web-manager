import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

import './style.css'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Loader from '../../components/Loader/loader';

const Appointment = () => {

    const [fullName, setFullName] = useState();
    const [hospitalNo, setHospitalNo] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [passportNo, setPassportNo] = useState();
    const [nationality, setNationality] = useState();
    const [countryOfResidence, setCountryOfResidence] = useState();
    const [chiefComplaint, setChiefComplaint] = useState();
    const [currentCondition, setCurrentCondition] = useState();
    const [historyOfPresentIllness, setHistoryOfPresentIllness] = useState();
    const [updatedInvestigations, setUpdatedInvestigations] = useState();
    const [updatedMedicalSummaryReport, setUpdatedMedicalSummaryReport] = useState();
    const [medicationsAllergies, setMedicationsAllergies] = useState();
    const [isPatientAdmitted, setIsPatientAdmitted] = useState();
    const [specificConcern, setSpecificConcern] = useState();
    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [summaryRequired, setSummaryRequired] = useState(false)
    const [investigationRequiured, setInvestigateionRequired] = useState(false);

    const form = useRef();

    useEffect(() => {
        if (!updatedInvestigations) {
            setSummaryRequired(false);
        } else {
            setSummaryRequired(true)
        }
        if (!updatedMedicalSummaryReport) {
            setInvestigateionRequired(false)
        } else {
            setInvestigateionRequired(true)
        }
    }, [])

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();

        let enquiry1 = new FormData();
        enquiry1.append("enquiry1", updatedInvestigations);

        let enquiry2 = new FormData();
        enquiry2.append("enquiry2", updatedMedicalSummaryReport);

        if (updatedInvestigations === undefined && updatedMedicalSummaryReport === undefined) {
            const enquiryDetails = {
                fullName, hospitalNo, dateOfBirth, passportNo, nationality
                , countryOfResidence, chiefComplaint, currentCondition, historyOfPresentIllness
                , medicationsAllergies, isPatientAdmitted, specificConcern
            }
            axios.post('https://email.bumrungradreferralnepal.com.np/enquiry', { enquiryDetails })
                .then((response) => {
                    setShowMessage(true)
                    setLoading(false)
                })
        } else {
            axios.post("https://email.bumrungradreferralnepal.com.np/uploader/enquiry1/upload", enquiry1).then((res) => {
                axios.post("https://email.bumrungradreferralnepal.com.np/uploader/enquiry2/upload", enquiry2).then((res) => {
                    const enquiryDetails = {
                        fullName, hospitalNo, dateOfBirth, passportNo, nationality
                        , countryOfResidence, chiefComplaint, currentCondition, historyOfPresentIllness
                        , medicationsAllergies, isPatientAdmitted, specificConcern
                    }
                    axios.post('https://email.bumrungradreferralnepal.com.np/enquiry', { enquiryDetails })
                        .then((response) => {
                            setShowMessage(true)
                            setLoading(false)
                        })
                })

            })
        }
        e.target.reset();
    }

    return (
        <>
            {showMessage && (
                <div className="alert alert-success text-center" role="alert">
                    Your request has been received!
                </div>
            )}
            {
                loading ?
                    <Loader />
                    :
                    <>
                        <Navbar />
                        <div className='inqury-wrapper'>
                            <div className='inqury-main'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <h2 className='d-flex justify-content-center heading-text'>PATIENT DETAILS</h2>
                                    <hr />
                                    <div className='row '>
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

                                    <h2 className='d-flex justify-content-center mt-5 heading-text'>ENQUIRY DETAILS</h2>
                                    <hr />
                                    <div className='row '>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Chief Complaint:</label>
                                            <input type="text" className="form-control" required name='pad' aria-describedby="emailHelp" onChange={(e) => setChiefComplaint(e.target.value)} placeholder="Chief Complaint" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Current condition:</label>
                                            <input type="text" className="form-control" name='pat' aria-describedby="emailHelp" onChange={(e) => setCurrentCondition(e.target.value)} placeholder="Current condition" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">History of Present Illness:</label>
                                            <input type="text" className="form-control" name="preferred_doctor" onChange={(e) => setHistoryOfPresentIllness(e.target.value)} aria-describedby="emailHelp" placeholder="History of Present Illness" />
                                        </div>

                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Updated Investigations:</label>
                                            <input type="file" className="form-control" multiple name='insurance_front' required={investigationRequiured} onChange={(e) => setUpdatedInvestigations(e.target.files[0])} aria-describedby="emailHelp" placeholder="Updated Investigations" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Updated Medical Summary Report:</label>
                                            <input type="file" className="form-control" name='insurance_back' required={summaryRequired} onChange={(e) => setUpdatedMedicalSummaryReport(e.target.files[0])} aria-describedby="emailHelp" placeholder="Updated Medical Summary Report" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Medications, Allergies:</label>
                                            <input type="text" className="form-control" name="roi" aria-describedby="emailHelp" onChange={(e) => setMedicationsAllergies(e.target.value)} placeholder="Medications, Allergies" />
                                        </div>

                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Is patient admitted?:</label>
                                            <input type="text" className="form-control" name="roi" aria-describedby="emailHelp" onChange={(e) => setIsPatientAdmitted(e.target.value)} placeholder="Is patient admitted" />
                                        </div>
                                        <div className="form-group col-sm-12 col-md-5 col-lg-3 m-3">
                                            <label htmlFor="exampleInputEmail1">Specific Concern:</label>
                                            <input type="text" className="form-control" name='specific_concern' onChange={(e) => setSpecificConcern(e.target.value)} aria-describedby="emailHelp" placeholder="Specific Concern" />
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