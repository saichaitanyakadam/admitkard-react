import {  useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/material.css'
import companyLogo from "../assets/AK_logo.svg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomBtn from '../components/CustomBtn';



const Login = () => {
    const [phone,setPhone]=useState("")
    const [validNo,setValidNo]=useState("")
    const [error,setError]=useState(false)
    const navigate=useNavigate()
    const handleClick=async()=>{
     if (validNo.length===10) {
      setError(false)
      try {
        const phoneNumber='+'+phone
        await axios.post("http://localhost:3500/api/send-otp",{phoneNumber})
        navigate("/otp-verification",{state:phone})
  
       } catch (error) {
        console.error(error)
       }
     }
     else {
        setError(true)
     }
     
      
      
    }
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>
    <img src={companyLogo} alt="logo" className='mb-10' width={250} height={20}/>
    <h1 className='text-[24px] font-[400] font-[Work Sans] mb-3'>Welcome Back</h1>
    <p className='text-[#666666] text-[1rem] font-[400] font-[Work Sans]'>Please sign in to your account</p>
    <div className='my-7'>
    <PhoneInput
    country={'in'}
     specialLabel='Enter Contact Number'
      onChange={(value,data)=>{
        setValidNo(value.slice(data.dialCode.length))
        setPhone(value)
      }}
/>
    </div>
    <p className='text-[12px] text-[#999999]'>We will send you a one time SMS message.
      Charges may apply.</p>
     <CustomBtn title="Sign in with OTP"  eventHandler={handleClick}/>
    {error &&  <p className='text-red-600 text-[12px]'>Enter valid contact number</p>}
  </div>
  )
}

export default Login