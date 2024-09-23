import React from 'react'
import logo from '../images/Printify.png'

const Nav = () => {
  return (
    <div className="nav z-10 flex items-center justify-between bg-[#fefeff] px-[8vw] py-4 h-[4.5vw] w-full shadow-xl">
        <div className=''>
          <img className='h-32 cursor-pointer' src={logo} alt="" />
        </div>
        <div className='flex items-center justify-center gap-10 font-thin'>
          <a href="#" className=' hover:text-[#38b75c]'>Catalog</a>
          <a href="#" className=' hover:text-[#38b75c]'>
          <details>
          <summary>How it works</summary>
        </details>
          </a >
          <a href="#" className=' hover:text-[#38b75c]'>Pricing</a>
          <a href="#" className=' hover:text-[#38b75c]'>Blog</a>
          <a href="#" className=' hover:text-[#38b75c]'>
          <details >
          <summary>Services</summary>
        </details>
          </a>
          <a href="#" className=' hover:text-[#38b75c]'>
          <details >
          <summary>Use Cases</summary>
        </details>
          </a>
          <a href="#" className=' hover:text-[#38b75c]'>
          <details >
          <summary>Need Help?</summary>
        </details>
          </a>
        </div>
        <div className='flex items-center justify-center gap-5 ml-10'>
          <button className='px-5 py-2 border-[1px] font-medium border-black rounded-sm hover:text-[#38b75c]'>Log in</button>
          <button className='px-5 py-2 bg-[#38b75c] text-white font-medium rounded-sm hover:bg-green-600'>Sign up</button>
        </div>
      </div>
  )
}

export default Nav