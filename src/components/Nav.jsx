import React from 'react'
import logo from '../images/Printify.png'

const Nav = () => {
  return (
    <div className="nav z-10 flex items-center justify-between bg-[#fefeff] px-[8vw] py-4 h-[4.5vw] w-full shadow-xl">
        <div className=''>
          <img className='h-32 cursor-pointer' src={logo} alt="" />
        </div>
        <div className='flex items-center justify-center gap-10 font-thin'>
          <a href="#">Catalog</a>
          <a href="#" className='overflow-auto'>
          <details>
          <summary>How it works</summary>
        </details>
          </a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">
          <details >
          <summary>Services</summary>
        </details>
          </a>
          <a href="#">
          <details >
          <summary>Use Cases</summary>
        </details>
          </a>
          <a href="#">
          <details >
          <summary>Need Help?</summary>
        </details>
          </a>
        </div>
        <div className='flex items-center justify-center gap-5 ml-10'>
          <button className='px-5 py-2 border-[1px] border-black rounded-sm'>Log in</button>
          <button className='px-5 py-2 bg-[#38b75c] rounded-sm'>Sign up</button>
        </div>
      </div>
  )
}

export default Nav