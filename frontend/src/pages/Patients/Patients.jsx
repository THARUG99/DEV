import React from 'react'

const Patients = () => {
  return (
    <section className='bg-gradient-to-r from-cyan-100 via-slate-50 to-yellow-50'>
      <div className='container text-center'> 
        <h2 className='heading'>
          Find Records
        </h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between '>
          <input 
          type="search"
          className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
          placeholder='NIC Number'
           />
           <button className='btn mt-0 rounded-[0px] rounded-r-md'>
            Search
           </button>
        </div>
      </div>
    </section>
  )
}

export default Patients