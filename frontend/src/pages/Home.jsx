import React from 'react'
import heroimg1 from '../assets/images/heroimg1.png'
import vec1 from '../assets/images/vec1.png'
import vec2 from '../assets/images/vec2.png'
import vec3 from '../assets/images/vec3.png'
import feaimg from '../assets/images/feaimg.png'
import faqimg from '../assets/images/faqimg.png'


import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'


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

{/* ---------------About Sec Start---------------------------*/}
<About />
{/* ---------------About Sec End---------------------------*/}

{/*--------------------Services---------------------------- */}
  <section className='serve'>
    <div className="container">
      <div className="xl:w-[470px] mx-auto ">
        <h2 className='heading text-center'>Our Services </h2>
        <p className='text__para text-center'>
          World-class care for everyone. Our health system offers unmatched,
          expert health care.
        </p>
      </div>

      <ServiceList/>
    </div>
  </section>
{/*--------------------Services End---------------------------- */}

{/*--------------------Features---------------------------- */}
<section className='features'>
  <div className="container">
    <div className="flex items-center justify-between lg:flex-row ">

     {/*----------Content----------*/}
     <div className="xl:w-[670px] ">
       <h2 className='heading'>
          Get Virtual Treatment <br /> Anytime
       </h2>
       <ul className="pl-4">
        <li className="text__para">
          1. Schedule appointments directly
        </li>
        <li className="text__para">
          2. Search your physician here
        </li>
        <li className="text__para">
          3.Use our online scheduling to select an appointment time
        </li>
       </ul>
       <Link to='/'><button className='btn'>Learn More</button></Link>
     </div>
     {/*----------image----------*/}
     <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
      <img src={feaimg} className='w-3/4' alt="" />

      {/*<div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
      md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pt-4 lg:pb-[26px] rounded-[10px] '>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px] lg:gap-3 ">
            <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'> Tue, 24</p>
            <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[6400]'> 10:00 AM</p>
          </div>
          <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
            <img src={vidimg} alt="" />
          </span>
        </div>
            </div> */}
     </div>
    </div>
  </div>  
</section>
{/*--------------------Features End---------------------------- */}

{/*--------------------Doctors---------------------------- */}
  <section className='doctors'>
    <div className="container">
      <div className="xl:w-[470px] mx-auto ">
        <h2 className='heading text-center'>Our Best Doctors </h2>
        <p className='text__para text-center'>
          World-class care for everyone. Our health system offers unmatched,
          expert health care.
        </p>
      </div>

      <DoctorList/>
    </div>
  </section>
  {/*--------------------Doctors End---------------------------- */}

  {/*--------------------Faq---------------------------- */}
  <section className='faq'>
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-0 ">
        <div className='w-1/2 hidden md:block'>
          <img src={faqimg} alt="" />
        </div>

        <div className='w-full md:w-1/2'>
         <h2 className='heading'>Frequently Asked Questions </h2>  

         <FaqList />     
        </div>
        
      </div>
    </div>
  </section>
  {/*--------------------Faq End---------------------------- */}

  {/*--------------------Testimonial----------------------------
  <section className='testimonial'>
    <div className="container">
      <div className="xl:w-[470px] mx-auto ">
        <h2 className='heading text-center'>Patients Feedback </h2>
        <p className='text__para text-center'>
          World-class care for everyone. Our health system offers unmatched,
          expert health care.
        </p>
      </div>

      
      </div>
  </section>
  --------------------Testimonial End---------------------------- */}
  </>
  
};

export default Home