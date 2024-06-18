import React from 'react';
import hape from '/weka.svg'
import pucuk from '/pucuk.svg';

function How() {
  return (
    <section className='flex flex-col items-center gap-4 pt-7 pb-14 mx-4'>
      <h1 className='font-bold text-3xl'>HOW DOES IT WORK</h1>
      <img src={pucuk} alt="Line" />
      <p className='max-w-[830px] text-center text-xl'>How does it work? Simply take a photo of an ingredient, and our app will instantly suggest a variety of recipes and meal ideas based on what you captured.</p>
      <div className='relative w-full flex items-center justify-center pt-8 pl-5'>
        <img src={hape} alt="" />
      </div>
    </section>
  )
}

export default How
