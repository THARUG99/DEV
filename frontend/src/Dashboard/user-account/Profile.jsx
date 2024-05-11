/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { BASE_URL, token } from '../../config.js'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader.js';
import { storage } from '../../utils/firebase.js'

const Profile = ({user}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    gender: '',
    bloodType: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      photo: user.photo,
      gender: user.gender,
      bloodType: user.bloodType,
    });
  }, [user]);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async e => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // const submitHandler = async event => {
  //   event.preventDefault();
  //   if (!selectedFile) {
  //     toast.error('Please select an image to upload');
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const storageRef = ref(storage, `images/${selectedFile.name}`);
  //     await uploadBytes(storageRef, selectedFile);
  //     const downloadURL = await getDownloadURL(storageRef);

  //     // Update formData with downloadURL immediately after upload
  //     setFormData(prevFormData => ({ ...prevFormData, photo: "downloadURL" }));

  //     const res = await fetch(`${BASE_URL}/users/${user._id}`, {
  //       method: 'put',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const { message } = await res.json();
  //     if (!res.ok) {
  //       throw new Error(message);
  //     }
  //     setLoading(false);
  //     toast.success(message);
  //     navigate('/users/profile/me');
  //   } catch (err) {
  //     toast.error(err.message);
  //     setLoading(false);
  //   }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        if (selectedFile) {
            const storageRef = ref(storage, `images/${selectedFile.name}`);
            await uploadBytes(storageRef, selectedFile);
            const downloadURL = await getDownloadURL(storageRef);

            // Update formData with downloadURL
            setFormData({ ...formData, photo: downloadURL });
        }

        const res = await fetch(`${BASE_URL}/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const result = await res.json();

        if (!res.ok) {
            throw Error(result.message);
        }

        toast.success(result.message);
    } catch (err) {
        toast.error(err.message);
    }
};
  
  return (
    <div className='mt-10'>
      <form onSubmit={(e) => submitHandler(e)}>
            <div className="mb-5">
            <input 
            type="text" 
            placeholder="Full Name" 
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
             placeholder-textColor cursor-pointer"
            required
            />
          </div>
          <div className="mb-5">
            <input 
            type="email" 
            placeholder="Enter Your Email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange}
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
             placeholder-textColor cursor-pointer"
            aria-readonly
            readOnly
            />
          </div>

          <div className="mb-5">
            <input 
            type="password" 
            placeholder="Set Up Password" 
            name="password"  
            value={formData.password}
            onChange={handleInputChange} 
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
             placeholder-textColor cursor-pointer"
            />
          </div>
          <div className="mb-5">
            <input 
            type="text" 
            placeholder="Blood Type" 
            name="bloodType"   
            value={formData.bloodType}
            onChange={handleInputChange} 
            className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
             focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
             placeholder-textColor cursor-pointer"
            required
            />
          </div>

           <div className='mb-5 flex items-center justify-between '>
            
            <label 
            className='text-headingColor font-bold text-[16px] leading-7 '>
              Gender :
              <select 
               name="gender"
               value={formData.gender}
            onChange={handleInputChange} 
               className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                
              </select>
            </label>
           </div>

            <div className='mb-5 flex items-center gap-3'>
              {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                <img 
                  src={formData.photo} 
                  alt='' 
                  className='w-full rounded-full cursor-pointer'
                />
              </figure>}

              <div className='relative w-[130px] h-[50px]'>
                <input 
                type="file" 
                name='photo' 
                id='customFile' 
                onChange={handleFileInputChange}
                accept='.jpg, .png'
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                 />

                 <label 
                  htmlFor="customFile" 
                  className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] 
                  text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold 
                  rounded-lg truncate cursor-pointer '>
                    {selectedFile ? selectedFile.name : 'Upload Photo'}
                 </label>

              </div>

            </div>

            <div className="mt-7">
            <button
            disabled={loading && true} 
            type="submit" 
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
              { loading ? <HashLoader size={25} color='#ffffff' /> : 'Update' }
            </button>
          </div>

            </form>
    </div>
  )
}

export default Profile