import React from 'react'

function Eightsection() {
  return (
   <>
   
       
       <form class=" w-[70.216rem] m-auto mt-20  h-[40.938rem] ">
           <h2 className='clr text-[3.75rem] font-bold  text-center w-[23.5rem] m-auto'>Contact us</h2>
           <p className='w-[37.5rem] m-auto text-white text-center  text-[1.25rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus odio tempor rutrum...</p>
  <div class="flex flex-wrap -mx-3 mb-6 mt-16">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
     
      <input class="appearance-none block w-full bg-transparent text-gray-700 brdr border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Your Name"/>
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-3">
     
      <input class="appearance-none block w-full bg-transparent text-gray-700 brdr  rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500" id="grid-last-name" type="text" placeholder="Your Address"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
     
      <textarea class="appearance-none block w-full bg-transparent h-36 text-gray-700 brdr  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500" id="grid-password" type="password" placeholder="Your Message ..."/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
<button className='flex flex-wrap  mb-6 brdr m-auto px-16 py-4 text-white'>Submit</button>
</form>
      
  
   </>
  )
}

export default Eightsection