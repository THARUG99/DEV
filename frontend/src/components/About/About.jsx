import React from 'react'
import abimg from '../../assets/images/abimg.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return <section className='about__section'>
    <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row '>
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={abimg} className='rounded-xl' alt="" />                
            </div>
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 '>
            <h2 className='heading'>Proud To Be On Top of The List Of Islands Best</h2>

            <p className='text__para'>For 8 years in a row,Sri Lanakan government and GMOA has recognized us as the best Electronic Health Service Provider in the Nation.Sri Lanakan government and GMOA has recognized us as the best Electronic Health Service Provider in the Nation</p>

            <p className='text__para '/>Our Best is something we strive for each day,caring for our customers-not looking back at what we acomplished but towards what we can do tommorow.Providing best Solutions.we acomplished but towards what we can do tommorow.Providing best Solutions<p/>
            <Link to='/'><button className='btn'>Learn More</button></Link>
        </div>
        </div>
       
    </div>
    
  </section>
  
}

export default About