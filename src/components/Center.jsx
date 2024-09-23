import React from 'react'
import tshirt from '../images/tshirt.jpg'

const Center = () => {
  return (
    <div className='Center flex items-center justify-betwen px-[8vw]'>
        <div className="left w-1/2 h-[38vw] pt-[12vw] px-[2vw]">
          <h1 className='text-6xl leading-[4.5vw] font-bold mb-5'>Create and sell <br />custom products</h1>
          <p className='font-medium ml-2'><span className='text-lg text-[#38b75c]'><i class="ri-check-line"></i></span> 100% Free to use</p>
          <p className='font-medium ml-2'><span className='text-lg text-[#38b75c]'><i class="ri-check-line"></i></span> 900+ High-Quality Products</p>
          <p className='font-medium ml-2'><span className='text-lg text-[#38b75c]'><i class="ri-check-line"></i></span> Largest global print network</p>
          <div className='mt-10 flex gap-4'>
            <button className='px-8 py-4 bg-[#38b75c] rounded-sm text-white font-medium hover:bg-green-600'>Start for free</button>
            <button className='px-8 py-4 border-[1px] border-black rounded-sm font-medium hover:text-[#38b75c]'><span><i class="ri-play-circle-line"></i></span> How it works?</button>
          </div>
          <h4 className='mt-6 text-[#38b75c] font-semibold'>Trusted by over 8M sellers around the world</h4>
        </div>
        <div className="right w-1/2 px-[5vw] py-[5vw] h-[38vw]">
        <img className="object-cover object-center" src={tshirt} alt="" />
        </div>
      </div>
  )
}

export default Center