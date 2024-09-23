import React from 'react'
import Nav from './components/Nav'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer'
import Center from './components/Center'

const App = () => {
  return (
    <div className='main h-screen w-full bg-[fefeff] font-[Helvetica]'>
      < Nav />
      < Center />
      < Footer />
    </div>
  )
}

export default App