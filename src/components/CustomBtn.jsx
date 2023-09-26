import React from 'react'

const CustomBtn = ({eventHandler,title ,error }) => {
  return (
    <button type='button' className='bg-[#F7B348] px-10 py-2 text-white rounded-3xl absolute bottom-[50px]' disabled={error} onClick={eventHandler}>{title}
    </button>
  )
}

export default CustomBtn