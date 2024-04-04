import React from 'react'
import { patients } from '../../assets/data/Patients'
import Patients from '../../pages/Patients/Patients'
import PatientCard from './PatientCard'

const PatientList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {patients.map((patient)=> (
             <PatientCard key={patients.id} patient={patient}/>
             ))}
    </div>
  )
}

export default PatientList