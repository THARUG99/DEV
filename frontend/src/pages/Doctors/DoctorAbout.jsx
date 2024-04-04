import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] font-semibold text-headingColor flex-items-center gap-2">
          About Of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'> Kusal Mendis</span>
        </h3>
        <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nostrum asperiores dolorum laborum 
        blanditiis perferendis officia quia magnam dolorem sequi accusamus illum debitis accusantium omnis autem aliquam atque libero ipsam 
        neque vitae fugit, explicabo mollitia suscipit? Amet dolor alias delectus corrupti error voluptas vel eligendi, commodi dolore saepe 
        nihil totam.</p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] font-semibold text-headingColor'>
          Education
        </h3>

        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px] '>
            <div>
                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formatDate('04-21-2005')} - {formatDate('07-15-2011')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  MBBS
                </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
                  University of Ruhuna, Karapitiya.
            </p>
          </li>
          <br />
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px] '>
            <div>
                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                 {formatDate('10-06-2016')} - {formatDate('10-06-2018')}
                </span>
                <p className='text-[15px] leading-6 font-medium text-textColor'>
                  PhD in Surgery
                </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
                  University of Oxford, London.
            </p>
          </li>
        </ul>
      </div>

      <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] font-semibold text-headingColor'>
          Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea] '>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold '>
              {formatDate('01-03-2012')} - {formatDate('05-05-2016')}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                  General Anesthesia
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  Teaching Hospital, Karapitiya.
            </p>
          </li>
          <li className='p-4 rounded bg-[#fff9ea] '>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold '>
              {formatDate('09-15-2018')} - {formatDate('04-04-2024')}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                  General Surgeon
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                  National Hospital Sri Lanka, Colombo.
            </p>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default DoctorAbout