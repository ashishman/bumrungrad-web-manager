import React from 'react'
import aboutBackground from '../../about-background.jpg';
import bumrungradBuilding from '../../Bumrungrad_Building.jpg';
import bumrungradClinic from '../../Bumrungrad_Clinic.jpg'
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';

import './style.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <img src={aboutBackground} style={{ filter: 'brightness(0.5)' }} class="img-fluid" alt="Responsive image" />
        <h3 className='mt-5 text-danger text-center animate__animated animate__bounce'>About Bumrungrad Hospital</h3>
        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Mission</h5>
        <hr />
        <p>Bumrungrad aspires to deliver innovative clinical and service experiences, accomplish operational excellence and establish transdisciplinary care teams with quality and humanized care.</p>
        <hr />

        <h5 className="text-danger animate__animated animate__backInUp">Ownership</h5>
        <hr />
        <p>Bumrungrad Hospital is a public company traded on the Stock Exchange of Thailand and managed by a multi-national team of experienced medical professionals and hospital administrators.</p>
        <hr />

        <h5 className='text-danger animate__animated animate__backInUp'>Main Hospital Facility (opened 1997)</h5>
        <hr />
        <ul>
          <li>One of the largest private hospitals in Southeast Asia
          </li>
          <li>12 stories with underground parking
          </li>
          <li>70,262 square meters
          </li>
          <li>Fully licensed medical heliport
          </li>
          <li>Hospital-wide Wi-Fi network coverage
          </li>
        </ul>
        <img src={bumrungradBuilding} class="img-fluid" alt="Responsive image" />
        <hr />

        <h5 className='text-danger animate__animated animate__backInUp'>Outpatient Clinic Facility (opened 2008)</h5>
        <hr />
        <ul>
          <li>One of the world’s largest private sector outpatient clinics</li>
          <li>21 stories plus 700 parking spaces</li>
          <li>57,206 square meters</li>
          <li>One-stop convenience, with cashier and pharmacy stations on each clinic floor</li>
          <li>Technology features such as Wi-Fi; LCD multi-language directories and TV; an automated lab to provide faster, more reliable results; online registration, medical records and diagnostic images, allowing doctors immediate access to patient information from their exam room computers</li>
          <li>A spacious modern 10th floor Sky Lobby featuring a premium member lounge, international medical coordination, business and visa extension services, first-time registration services, Starbucks, and a bookstore
          </li>
          <li>Patient Volumes & Revenues</li>
          <ul>
            <li>Over 1.1 million patients treated per year (OPD and IPD)</li>
            <li>Over 520,000 are international patients, from over 190 different countries</li>
            <li>Over USD 546 million annual turnover in 2018</li>
          </ul>
        </ul>

        <img src={bumrungradClinic} class="img-fluid" alt="Responsive image" />
        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Human Resources</h5>
        <hr />
        <ul>
          <li>International management team</li>
          <li>Over 4,800 employees</li>
          <li>Over 1,200 physicians and dentists, many with international training/certification</li>
          <li>Over 900 nurses</li>
        </ul>
        <img src="https://www.bumrungrad.com/getattachment/60c9582e-d308-4bc7-a2a3-dfa673375d67/Bumrungrad_Human-Resources.jpg" class="img-fluid" alt="Responsive image" />
        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Inpatient Capacities</h5>
        <hr />
        <ul>
          <li>580 Inpatient Beds include:</li>
          <ul>
            <li>Medical/Surgical/OB/Pediatrics</li>
            <li>Adult Intensive Care (ICU)</li>
            <li>Cardiac Care (CCU)</li>
            <li>Pediatric Intensive Care</li>
            <li>Level IV Neonatal Intensive Care</li>
          </ul>
          <li>Single Deluxe Rooms, Premier Atrium Deluxe, Premier Royal Suites, 2 Bedded, and 4 Bedded</li>
          <li>Wi-Fi Connection: a wide selection of television channels as well as the hospital’s information and services
          </li>
        </ul>
        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Outpatient Facilities</h5>
        <hr />
        <ul>
          <li>275 Examination Suites</li>
          <li>Ambulance and mobile critical care fleet</li>
          <li>24-hour emergency care, including emergency cardiac catheterization</li>
          <li>A capacity of 5,500 outpatients per day</li>
          <li>Outpatient Surgery Center</li>
        </ul>
        <img src="https://www.bumrungrad.com/getattachment/9149d995-cab4-442e-9116-d083f0e520a9/Bumrungrad_room.jpg" class="img-fluid" alt="Responsive image" />
        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Outpatient Clinics, Centers and Programs</h5>
        <hr />
        <ul>
          <li>Allergy Center</li>
          <li>Arrhythmia Center</li>
          <li>Behavioral Health Center</li>
          <li>Breast Care Clinic</li>
          <li>Breastfeeding Clinic</li>
          <li>Bumrungrad Joint Replacement Center</li>
          <li>Children’s Center</li>
          <li>Dental Center</li>
          <li>Diabetes Center</li>
          <li>Diagnostic Center</li>
          <li>Dialysis Center</li>
          <li>Digestive Disease (GI) Center</li>
          <li>Ear, Nose and Throat Center</li>
          <li>Emergency Center</li>
          <li>Eye Center</li>
          <li>Fertility Center and IVF Clinic</li>
          <li>Health Screening Center</li>
          <li>Hearing and Balance Clinic</li>
          <li>Heart (Cardiology) Center</li>
          <li>Horizon Regional Cancer Center</li>
          <li>Hyperbaric Oxygen Therapy</li>
          <li>Hypertension Clinic</li>
          <li>Intensive Care Unit (ICU)</li>
          <li>Liver Center</li>
          <li>Medical Clinic</li>
          <li>Memory Clinic</li>
          <li>Men’s Center</li>
          <li>Nephrology (Kidney) Center</li>
          <li>Neuroscience Center</li>
          <li>New Life Healthy Aging Clinic</li>
          <li>Orthopedic Center</li>
          <li>Pain Center</li>
          <li>Parkinson’s Disease and Movement Disorders Clinic</li>
          <li>Perinatal Center</li>
          <li>Physical Therapy and Rehabilitation Center</li>
          <li>Plastic (Cosmetic) Surgery Center</li>
          <li>Pulmonary (Lung) Center</li>
          <li>Refractive Surgery Center</li>
          <li>Robotic Scoliosis Center</li>
          <li>Robotic Surgery Center</li>
          <li>Skin (Dermatology) Center</li>
          <li>Sleep Lab</li>
          <li>Scoliosis Center</li>
          <li>Spine Institute</li>
          <li>Sports Medicine Center</li>
          <li>Surgical Clinic</li>
          <li>Travel Medicine Center</li>
          <li>Urology Center</li>
          <li>VitalLife Scientific Wellness Center</li>
          <li>Women's Center</li>
        </ul>

        <img src="https://www.bumrungrad.com/getattachment/e40ef0a5-d226-4059-b756-4a99043d3d77/Bumrungrad_Center.jpg" class="img-fluid" alt="Responsive image" />

        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Special Facilities and Services</h5>
        <hr />
        <ul>
          <li>2 cardiac catheterization laboratories</li>
          <li>2 cardiac operating theaters</li>
          <li>19 operating theaters</li>
          <li>Automated lab on-site</li>
          <li>Brachytherapy</li>
          <li>Bone marrow transplantation unit</li>
          <li>Electrophysiology lab</li>
          <li>Hyperbaric oxygen therapy unit</li>
          <li>Interventional radiology</li>
          <li>MAKO Robot Arthroplasty/MAKOplasty®</li>
          <li>Mazor X Robot-assisted Spine Surgery</li>
          <li>MRI, CT and Lithotripsy</li>
          <li>Neonatal critical care transport</li>
          <li>Nuclear medicine</li>
          <li>PACS radiology</li>
          <li>PET/CT scanner</li>
          <li>Pharmacy robot</li>
          <li>Precision Medicine for Oncology</li>
          <li>Radiation therapy (linear accelerator)</li>
          <li>Robot-assisted Prostate Cancer and Kidney Cancer Surgery using da Vinci System</li>
          <li>Sleep lab</li>
          <li>Surgical navigation system</li>
          <li>VitalLife Scientific Wellness Center</li>
          <li>VMAT (Volumetric Modulated Arc Therapy)</li>
        </ul>
        <hr />

        <h5 className='text-danger animate__animated animate__backInUp'>Special International Services</h5>
        <hr />
        <ul>
          <li>Over 150 interpreters,</li>
          <li>International/airport concierge service,</li>
          <li>Embassy assistance,</li>
          <li>VIP airport transfers,</li>
          <li>E-mail contact center,</li>
          <li>International insurance coordination and international medical coordinators,</li>
          <li>Visa extension counter,</li>
          <li>Muslim prayer room with 300 person capacity</li>
        </ul>
        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Quality, Accreditations, Certifications and Recognitions</h5>
        <hr />
        <ul>
          <li>The first private hospital awarded Thailand Hospital Accreditation (1999)
          </li>
          <li>Asia’s first hospital accredited by the US-based Joint Commission International (JCI) in 2002.</li>
          <li>Reaccredited by the JCI in 2005, 2008, 2011, 2014, and 2017 2020</li>
          <li>Thailand’s Model Organization on Labor Relations Management Award by the Ministry of Labor</li>
          <li>First hospital in Thailand to receive accreditation from the College of American Pathologists (CAP) – Gold standard of operational excellence, for its clinical laboratory</li>
          <li>First hospital in Asia to receive Pathway to Excellence® by American Nurse Credentialing Center (ANCC) – the positive practice environment for nurses by valuing nurses’ contributions as patient care partners</li>
          <li>Center of Excellence Award, by CSSD – Award for the best sterilizing process for instrument and medical device</li>
          <li>Global Health and Travel Magazine Awards:</li>
          <li>Medical Tourism Hospital of the Year in Asia Pacific 2017 and 2018,</li>
          <li>Hospital of the Year Thailand 2018,</li>
          <li>Smart Hospital of the Year in Asia Pacific 2018,</li>
          <li>Transplant Service Provider of the Year in Asia Pacific 2018,</li>
          <li>Orthopaedic Service Provider of the Year in Asia 2018,</li>
          <li>ENT Service Provider of the Year in Asia Pacific 2018,</li>
          <li>Cosmetic Surgery Provider of the Year in Asia Pacific 2018,</li>
          <li>Cardiology Service Provider of the Year in Asia Pacific 2018</li>
          <li>First hospital in the world outside the United States to achieve Global Healthcare Accreditation (GHA) with Excellence 2017 , Reaccredited  in 2021</li>
          <li>Hospital of the Year – Thailand awarded by Healthcare Asia 2018</li>
          <li>Most Trusted Hospital – Thailand awarded by Thai business Excellence Awards 2018</li>
          <li>First in Asia – Center of Excellence for Managing Infection Risk (MIR) Standard, by DNV-GL – The management of infection risk during the delivery of outpatient diagnostic, surgical, therapeutic and rehabilitation care and inpatient medical, surgical, maternity care</li>
          <li>First hospital in the world to achieve Certification of Conformance with GHA COVID-19 Guidelines for Medical Travel Programs</li>
        </ul>

        <img src="https://www.bumrungrad.com/getattachment/38de4c18-738b-4f68-b810-12c8ada09acb/Bumrungrad_inter.jpg" class="img-fluid" alt="Responsive image" />

        <hr />
        <h5 className='text-danger animate__animated animate__backInUp'>Social Responsibility</h5>
        <hr />
        <p>The Bumrungrad Hospital Foundation was established in 1990 and is dedicated to providing healthcare to underprivileged Thai residents. The Foundation has provided over 100,000 Thais with free services ranging from check-up programs to life-saving surgery for children with defective hearts; as well as providing no-cost treatments to those in need of knee surgery through the “Knee Replacement Surgery Program.” For five consecutive years, the AMCHAM has honored Bumrungrad International for their commitment to social welfare, awarding Bumrungrad International with the AMCHAM “Corporate Social Responsibility Excellence Recognition – Gold Level” Award in 2013, 2014, 2015, 2016, and 2017.</p>
      </div>
      <Footer/>
    </>
  )
}

export default About;