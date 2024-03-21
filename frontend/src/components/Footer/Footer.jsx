import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/footlogo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'


const socialLinks = [
  {
    
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
    path: 'https://www.linkedin.com',
  },
  {
    
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
    path: 'https://www.youtube.com',
  },
  {
    
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
    path: 'https://github.com/THARUG99',
  },
  {
    
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
    path: 'https://www.instagram.com/gimaa.99/',
  },
];

const quickLinks01 = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'About',
    path: '/about',
  },
  {
    display: 'Services',
    path: '/services',
  },
  {
    display: 'Doctors',
    path: '/doctors',
  },
  
];

const quickLinks02 = [
  {
    display: 'Find A Doctor',
    path: '/doctors',
  },
  {
    display: 'Ask From Us',
    path: '/',
  },
  {
    display: 'Request Details ',
    path: '/patients',
  },
  {
    display: 'Book an Appointment',
    path: '/doctors',
  },
  
]

const quickLinks03 = [
  
  {
    display: 'Donate',
    path: '/',
  },
  {
    display: 'Contact Us',
    path: '/contact',
  },
]
  

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
       <div className="flex flex-col justify-between md:flex-row flex-wrap gap-[30px]"> 
        <div>
          <img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
            Copyright © {year} <br /> Developed By Tharusha Amraweera <br /> all right reserved.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}               
                className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center
                 group hover:bg-primaryColor hover:border-none'
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
            Quick Links
          </h2>

              <ul>
                {quickLinks01.map((item,index) => (
                <li key={index} className='mb-4' >
                  <Link to={item.path}
                   className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                  
                </li>))}
              </ul>

         </div>

         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
            Want to:
          </h2>

              <ul>
                {quickLinks02.map((item,index) => (
                <li key={index} className='mb-4' >
                  <Link to={item.path}
                   className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                  
                </li>))}
              </ul>

         </div>

         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
            Support
          </h2>

              <ul>
                {quickLinks03.map((item,index) => (
                <li key={index} className='mb-4' >
                  <Link to={item.path}
                   className='text-[16px] leading-7 font-[400] text-textColor'
                  >
                    {item.display}
                  </Link>
                  
                </li>))}
              </ul>

         </div>

       </div>
      </div>
    </footer>
  )
}

export default Footer