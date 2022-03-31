import React from 'react'
import custome from '../custome.svg';
import rafiki from '../rafiki.svg';
function Fifthsection() {
  return (
    <>
    <div className='container  h-[22.6rem] border-l-4'>
        <div className='my-36 grid grid-cols-2 gap-[5.4rem]'>
            <div className='ml-[3.6rem] w-[37.5rem]'> 
                <p className='text-[2rem] text-white'>What is</p>
                <p className='clr font-bold text-[3.75rem]'>Custom Interface</p>
                <p className='text-[1.25rem] w-[37.5rem] leading-8 text-white'>Lorem ipsum dolor si amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis.
                    Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.</p>
                    <button className='mt-4 brdr w-[18.3rem] h-[5rem]  text-[1.6rem] text-white text-center'>Learn More </button>  
                        </div>
            <div className=''><img src={custome}/></div>
        </div>
    </div>
    <div className='container  h-[27.6rem] '>
        <div className='my-36  grid grid-cols-2 gap-[5.4rem]'>
        <div className=''><img src={rafiki}/></div>
        <div className='border-l-4  mt-16'>
            <div className=' ml-[3.6rem]'> 
                <p className='text-[2rem] w-[37.5rem]  text-white'>What is</p>
                <p className='clr font-bold text-[3.75rem]'>Custom Interface</p>
                <p className='text-[1.25rem] w-[37.5rem] leading-8 text-white'>Lorem ipsum dolor si amet, consectetur adipiscing elit. Vitae quam sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed iaculis.
                    Mauris, curabitur scelerisque sagittis posuere mollis. In dolor neque et vitae lectus vulputate pellentesque luctus.</p>
                    <button className='mt-4 brdr w-[18.3rem] h-[5rem]  text-[1.6rem] text-white text-center'>Learn More </button>  
                        </div>
                        </div>
        </div>
    </div>
    </>
  )
}

export default Fifthsection