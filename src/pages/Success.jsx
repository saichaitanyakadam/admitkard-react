import React from 'react'
import artBoard from "../assets/Artboard.svg"
import CustomBtn from '../components/CustomBtn'

const Success = () => {
  return (
   <div className='flex flex-col justify-center items-center h-screen'>
    <img src={artBoard} alt='art-board' width={300} className='mb-10' />
    <h1 className='text-[24px] font-[600] mb-3'>Welcome to AdmitKard</h1>
    <p className='text-center text-[#999999] mb-5'>In order to provide you with a custom experience,<br />
<span className='text-[#666666]'>we need to ask you a few questions.</span></p>
<CustomBtn title="Get Started" />
<p className='text-[#999999] text-[12px] absolute bottom-[30px]'>*This will only take 5 min.</p>
   </div>
   
  )
}

export default Success