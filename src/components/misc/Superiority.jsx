import React from 'react'
import garis from '/garis.svg'
import easy from '/easy.svg';
import quick from '/quick.svg';
import hand from '/reliable.svg';


function Superiority() {
  return (
    <section className='h-[528px] flex items-center justify-center gap-40'>
      <div className='flex flex-col items-center gap-3'>
        <img src={easy} alt="easyUsed" />
        <h1 className='text-2xl font-bold'>EASY TO USED</h1>
        <img src={garis} alt="line" />
        <p className='text-center w-[310px] text-xl'>Reseepe offers a seamless experience, allowing you to effortlessly find recipes with just a quick photo of your ingredients.</p>
      </div>

      <div className='flex flex-col items-center gap-3'>
        <img src={quick} alt="fast" />
        <h1 className='text-2xl font-bold'>QUICK</h1>
        <img src={garis} alt="line" />
        <p className='text-center w-[330px] text-xl'>With Reseepe, you can quickly snap a photo of any ingredient and receive instant recipe suggestions, making meal preparation fast and effortless.</p>
      </div>

      <div className='flex flex-col items-center gap-3'>
        <img src={hand} alt="reliable" />
        <h1 className='text-2xl font-bold'>RELIABLE</h1>
        <img src={garis} alt="line" />
        <p className='text-center w-[310px] text-xl'>Reseepe is user-friendly, making it simple to discover recipes and meal suggestions based on the ingredients you have on hand.</p>
      </div>
    </section>
  )
}

export default Superiority
