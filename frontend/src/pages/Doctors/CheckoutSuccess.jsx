import { Link } from 'react-router-dom'

const CheckoutSuccess = () => {
  return (
    <div className='bg-gray-100 h-screen'>
        <div className='bg-white p-6 md:mx-auto'>
            <svg 
            viewBox='0 0 24 24' 
            className='text-green-600 w-16 h-16 mx-auto my-6'
            >
                <path 
                fill='currentColor' 
                d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.3'>
                </path>
            </svg>
            <div className='text-center'>
                <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
                    Payment Successful!!
                </h3>
                <p className='my-2 text-gray-600'>
                    Your payment has been received.Thank you for your payment.
                </p>
                <p>Have a nice day!</p>
                <div className='py-10 text-center'>
                <Link 
                to='/home'
                className='px-12 bg-buttonBgColor text-white font-semibold py-3'>                   
                        Go to Home                 
                </Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CheckoutSuccess;