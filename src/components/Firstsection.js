import React from 'react'
import arrow from '../arrow.svg';
import arrow1 from '../arrow1.svg';
function Firstsection() {
  return (
    <>
    <div className=''>
        <div className='text-center pt-[9.12rem] container w-[55rem] h-[33.98rem] '>
            <p className='text-[2.8rem] text-white'>Let Ai help your</p>
            <h2 className='clr font-bold text-[6.1rem] '>MARKETING TEAM</h2>
            <p className=' w-[37.5rem] m-auto text-[1.25rem] text-white'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas 
                purus odio tempor rutrum condimentum viverra ornare. Gravida tellus ut venenatis.</p>
               <div className='m-auto   mt-4 flex justify-center brdr w-[18.3rem] h-[4.5rem] '>
                 <button className=' text-[1.7rem] font-bold text-white'>Let's Go</button> 
                <span className='my-auto mx-4'><img src={arrow}/></span></div>
                <div className='flex justify-center mt-[7rem]'><img src={arrow1}/></div>
        </div>
       
    </div>
    </>
  )
}

export default Firstsection