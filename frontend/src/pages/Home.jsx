import React from 'react'
import heroimg1 from '../assets/images/heroimg1.png'
import vec1 from '../assets/images/vec1.png'
import vec2 from '../assets/images/vec2.png'
import vec3 from '../assets/images/vec3.png'

import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const Home = () => {
  return <> 
  
  {/*-------------- Hero Section--------------------*/}
  
  <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className="container">
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
        {/*----------------Content-------------*/}
        <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent font-[800] md:text-[60px] md:leading-[70px]'>
              Say Bye To Papers.
              </h1>
              <p className='text__para'>
              Electronic Health Record (EHR) software systems provide numerous advantages over paper-based record-keeping in healthcare settings.
              </p>

              <button className='btn'>Request Details</button>
          </div>

          {/*----------------- Hero Counter------------------- */}
          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-[30px]'>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
                
                10+
              </h2>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>
                Years Of Exellence
              </p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
                
                10k+
              </h2>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>
                Professionals
              </p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
                
                10M+
              </h2>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text__para'>
                Users
              </p>
            </div>

          </div>
        </div>
        {/* ----------------Content------------- */}
        <div className='flex gap-[30px] justify-end'>
          <div>
            <img className='w-full' src={heroimg1} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  </section>
  {/*-------------- Hero Section End--------------------*/}

  <section className='body__sec'>
    <div className="container">
      <div className='lg:w-[470px] mx-auto'>
        <h2 className='heading text-center'>
          Retrieve Data....... 
          Anytime, Anywhere
          </h2>
          <p className='text__para text-center '>Electronic records can be accessed from anywhere with an internet connection, allowing healthcare providers to retrieve patient information quickly and easily, even remotely. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

      <div className="py-[30px] px-5 ">
        <div className='flex items-center justify-center'>
          <img src={vec1} alt="" />
        </div>
        <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
          <p>World-class care for everyone.Our Health System offers unmatched,Expert health care from the lab to hospital</p>

          <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover '>
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
          </Link>
        </div>
      </div>

      <div className="py-[30px] px-5 ">
        <div className='flex items-center justify-center'>
          <img src={vec3} alt="" />
        </div>
        <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Patients</h2>
          <p>World-class care for everyone.Our Health System offers unmatched,Expert health care from the lab to hospital</p>

          <Link to='/patients' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover '>
            <BsArrowRight className='group-hover:text-white w-6 h-5'/>
          </Link>
        </div>
      </div>

      <div className="py-[30px] px-5 ">
        <div className='flex items-center justify-center'>
          <img src={vec2} alt="" />
        </div>
        <div className='mt-[30px]'>
          <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find Us</h2>
          <p>World-class care for everyone.Our Health System offers unmatched,Expert health care from the lab to hospital</p>


        </div>
      </div>


      </div>
    </div>
  </section>

  </>
  
};

export default Home