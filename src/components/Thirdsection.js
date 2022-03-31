import React from 'react'
import Vector1 from '../Vector1.svg';
import Vector2 from '../Vector2.svg';
import Vector3 from '../Vector3.svg';
import Vector4 from '../Vector4.svg';
import Vector5 from '../Vector5.svg';
function Thirdsection() {
  return (
   <>
   <div className='container '>
       
       <div className=' mt-[8rem] '><div className="clr w-[39.8rem] text-[3.75rem] font-bold">Explore the features!</div>
       <p className='text-white text-[1.25rem] w-[37.56rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus odio tempor rutrum...</p>
       </div>
   </div>
   <div className='container '>
       <div className='mt-[4rem]  grid justify-around grid-cols-3 text-white  '>
       <div className='w-[28rem] brdr h-[23.5rem] mb-[1.33rem] '>
           <div className='w-[16.33rem] ml-[3.4rem]  mt-[5rem]'>
               <img src={Vector1}/>
               <p className='text-[2rem]  font-bold'>Create Ai Based Website</p>
           </div>
       </div>
       <div className='w-[28rem] brdr h-[23.5rem] mb-[1.33rem] '>
           <div className='w-[16.33rem] ml-[3.4rem] mt-[5rem]'>
               <img src={Vector2}/>
               <p className='text-[2rem]  font-bold'>Create Ai Based Website</p>
           </div>
       </div>
       <div className='w-[28rem] brdr h-[23.5rem] mb-[1.33rem] '>
           <div className='w-[16.33rem] ml-[3.4rem] mt-[5rem]'>
               <img src={Vector3}/>
               <p className='text-[2rem]  font-bold'>Create Ai Based Website</p>
           </div>
       </div>
       <div className='w-[28rem] brdr h-[23.5rem] mb-[1.33rem] '>
           <div className='w-[16.33rem] ml-[3.4rem] mt-[5rem]'>
               <img src={Vector4}/>
               <p className='text-[2rem]  font-bold'>Create Ai Based Website</p>
           </div>
       </div>
       <div className='w-[28rem] brdr h-[23.5rem] mb-[1.33rem] '>
           <div className='w-[16.33rem] ml-[3.4rem] mt-[5rem]'>
               <img src={Vector5}/>
               <p className='text-[2rem]  font-bold'>Create Ai Based Website</p>
           </div>
       </div>
       </div>
   </div>
   </>
  )
}

export default Thirdsection