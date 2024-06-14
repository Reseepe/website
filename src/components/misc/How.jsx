import React from 'react';
import kunci from '/kunci.svg';
import hape from '/phone-how.svg';
import pucuk from '/pucuk.svg';

function How() {
  return (
    <section className='flex flex-col items-center gap-4'>
      <h1 className='font-bold text-3xl'>HOW DOES IT WORK</h1>
      <img src={pucuk} alt="" />
      <p className='max-w-[830px] text-center text-xl'>How does it work? Simply take a photo of an ingredient, and our app will instantly suggest a variety of recipes and meal ideas based on what you captured.</p>
      <div className='relative w-full flex items-center justify-center'>
        <img src={hape} alt="" />
        <div className='flex flex-row gap-2 bg-kotak absolute top-10 left-[105px] p-3 shadow-custom-left-bottom'>
          <img src={kunci} alt="" />
          <div>
            <h2 className='font-bold'>Login First</h2>
            <p className='max-w-[245px]'>Login first to start exploring recipes and meal ideas tailored to your ingredients.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How
