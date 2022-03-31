import React from 'react'

function Menu() {
  return (
    <div className='w-[108rem] m-auto'>
        <div className='flex justify-between p-6 text-white'>
            <div className='font-bold text-[1.918rem]'>TMarkai</div>
            <div className='mt-2'>
                <ul className='gap-8 flex  text-[1.25rem]'>
                <li><a href="">Feature </a></li>
                <li><a href="">Products </a></li>
                <li><a href="">Company </a></li>
                <li><a href="">Pricing </a></li>
                <li><a href="">Support  </a></li>
                </ul></div>
            <div className='mt-2 '>
                <ul className='flex gap-4 font-bold '>
                    <li><a href="">Login</a></li>
                    <li className='brdr px-4 '><a href="">Register</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu