import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justfy-center items-center flex-col'>
<nav className='flex justify-between items-center w-full mb-10 pt-4'>
  <img src={logo} alt="SumzLog" className='w-28 object-contain'/>

  <button
  className='black_btn'
  type='button'
  onClick={() => window.open('https://github.com/kanchana404/Summarizer')}
  >
    Github
  </button>
</nav>

<h1 className='head_text'>
  Summerize Article with <br  className='max-md:hidden'/> 
  <span className='orange_gradient'>OpenAI GPT-4</span>
</h1>
<h2 className='desc'>
  Simplify your reading with SumZ, an open-source article summarizer that transfrm lengthy article in to clear and concise summaries
</h2>
    </header>
  )
}

export default Hero