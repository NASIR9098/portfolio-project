import React from 'react'
import arrow from '../arrow.svg';
import Linkedin from '../Linkedin.svg';
import Twitter from '../Twitter.svg';
import Facebook from '../Facebook.svg';
import Instagram from '../Instagram.svg';
import Cb from '../Cb.svg';
function Footer() {
    return (
        <>
            <div className=' h-[40rem] footer flex py-auto container-fluid grid-cols-2 justify-around '>
                <div className='w-[31.5rem]'>
                    <h2 className='clr text-[5.35rem] font-bold my-24 mb-0 w-[19rem]'>Markai</h2>
                    <p className='text-[1.25rem] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam sit scelerisque
                        enim in sed diam nec, blandit.
                        Amet tellus massa sed iaculis. Mauris, curabitur scelerisque.</p>
                    <div className=' mt-4 flex justify-center brdr w-[15.6rem] h-[4.5rem] '><button className='text-[1.7rem] font-bold text-white'>Let's Go</button>
                        <span className='my-auto mx-4'><img src={arrow} /></span></div>
                    <ul className='flex gap-4 pt-6'>
                        <li><img src={Linkedin} /></li>
                        <li><img src={Facebook} /></li>
                        <li><img src={Cb} /></li>
                        <li><img src={Instagram} /></li>
                        <li><img src={Twitter} /></li>
                    </ul>
                </div>
                <div className='flex flex-cols w-[25.75rem] text-[1.25rem]  my-24   text-white'>
                    <div className='' >
                        <ul className='m-4 grid gap-2'>
                            <li className='font-bold'>Site</li>
                            <li>Feature</li>
                            <li>Products</li>
                            <li>Company</li>
                            <li>Pricing</li>
                            <li>Support</li>
                        </ul>
                        <ul className='m-4 grid gap-2'>
                            <li className='font-bold'>Company</li>
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Out Story</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='m-4 grid gap-2'>
                            <li className='font-bold'>Legale</li>
                            <li>Privacy Policy</li>
                            <li>Tearm & condition</li>
                            <li>Company Policy</li>
                        </ul>
                        <ul className='m-4 py-20 grid gap-2'>
                            <li className='font-bold'>Follow Us one</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Linkedin</li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer