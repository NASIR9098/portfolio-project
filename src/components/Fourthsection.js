import React from 'react'
import writing from '../writing.svg';
function Fourthsection() {
  return (
    <>
    <div className='container h-[67.125rem]  bg-red-400'>
        <div className='text-white text-center mt-[9.3rem]'>
            <p className='text-[2rem]'>Let’s introduce with</p>
            <p className='text-[3.75rem] clr font-bold'>Your Writing Partner!</p>
            <p className='w-[37.5rem] m-auto text-[1.25rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus odio tempor rutrum...</p>
        </div>
        <div className='mt-16'>
            <img src={writing}/>
        </div>
    </div>
    </>
  )
}

export default Fourthsection