import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input'
import loginPageLogo from "../assets/otp_page_image.svg"
import CustomBtn from '../components/CustomBtn'
import axios from 'axios'

const Otp = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const [otp,setOtp]=useState("")
    const [resendDisabled, setResendDisabled] = useState(true)
    const [countdown, setCountdown] = useState(60)
    useEffect(() => {
        let timer;
    
        if (countdown > 0 && resendDisabled) {
          timer = setTimeout(() => {
            setCountdown(countdown - 1);
          }, 1000); 
        } else if (countdown === 0) {
          setResendDisabled(false);
          clearTimeout(timer);
        }
    
        return () => clearTimeout(timer)
      }, [countdown, resendDisabled]);
    
      const handleResend =async () => {
        setResendDisabled(true);
        setCountdown(60)
        try {
            const phoneNumber="+"+phoneNum
            await axios.post("http://localhost:3500/api/send-otp",{phoneNumber})
        } catch (error) {
            
        }
      };
    const [errorMsg,setErrorMsg]=useState("")
    const phoneNum=location.state
   
    const handleClick=async()=>{
        try {
            const phoneNumber="+"+phoneNum
            await axios.post("http://localhost:3500/api/verify-otp",{phoneNumber,otp})
            setErrorMsg("")
            navigate("/success")
        } catch (err) {
            const {error}=(err.response.data)
            setErrorMsg(error)
        }
        
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <img src={loginPageLogo} alt='logo' width={138}  className='drop-shadow-md mb-10'/>
        <p className='text-[#333333] text-[20px] font-[Work Sans] font-[400] mb-5'>Please verify Mobile number</p>
        <p className='text-[#666666] text-[16px] font-[400]'>An OTP is sent to +<span className='text-[#333333]'>{phoneNum}</span></p>
        <button type='button' className='text-[#F7B348] text-[12px]' onClick={()=>{
            navigate("/")
        }}>Change Phone Number</button>
       <div className='my-5'>
       <OtpInput
            value={otp}
            onChange={setOtp}
            shouldAutoFocus
            numInputs={6}
            containerStyle='gap-2'
            inputStyle="text-black font-[600] border shadow-xl border-black outline-[#F7B348] flex justify-center"
            renderSeparator={<span></span>}
            renderInput={(props) => <input {...props} />}/>
       </div>
       <p className='text-[16px] text-[#999999]'>Didn’t receive the code? <button type="button" disabled={resendDisabled} className='text-[#F7B348]' onClick={handleResend}>Resend</button> {countdown!==0 && `in ${countdown} secs`}</p>
       {setErrorMsg.length && <p className='text-[12px] text-red-500'>{errorMsg}</p>}
        <CustomBtn eventHandler={handleClick} title="Verify"/>
    </div>
  )
}

export default Otp