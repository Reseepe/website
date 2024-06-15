import React from 'react';
import kunci from '/kunci.svg';
import hape from '/phone-how.svg';
import pucuk from '/pucuk.svg';
import kamera from '/camera.svg';
import add from '/add.svg';
import result from '/result.svg';

function How() {
  return (
    <section className='flex flex-col items-center gap-4 pt-7 pb-14'>
      <h1 className='font-bold text-3xl'>HOW DOES IT WORK</h1>
      <img src={pucuk} alt="" />
      <p className='max-w-[830px] text-center text-xl'>How does it work? Simply take a photo of an ingredient, and our app will instantly suggest a variety of recipes and meal ideas based on what you captured.</p>
      <div className='relative w-full flex items-center justify-center pt-8 pl-5'>
        <img src={hape} alt="" />

        <div className='flex flex-row gap-2 bg-kotak absolute top-14 left-[105px] p-3 shadow-custom-left-bottom'>
          <img src={kunci} alt="" />
          <div>
            <h2 className='font-bold'>Login First</h2>
            <p className='max-w-[245px]'>Login first to start exploring recipes and meal ideas tailored to your ingredients.</p>
          </div>
        </div>

        <div className='flex flex-row gap-2 bg-kotak absolute top-[435px] left-[152px] p-3 shadow-custom-left-bottom'>
          <img src={kamera} alt="" />
          <div>
            <h2 className='font-bold'>Take a Picture</h2>
            <p className='max-w-[205px]'>Take a picture of your ingredient to get recipe ideas.</p>
          </div>
        </div>

        <div className='flex flex-row gap-2 bg-kotak absolute top-28 right-[106px] p-3 shadow-custom-left-bottom'>
          <img src={add} alt="" />
          <div>
            <h2 className='font-bold'>Add Manually</h2>
            <p className='max-w-[245px]'>Add ingredients manually if needed, to explore more recipe options.</p>
          </div>
        </div>

        <div className='flex flex-row gap-2 bg-kotak absolute top-[375px] right-[173px] p-3 shadow-custom-left-bottom'>
          <img src={result} alt="" />
          <div>
            <h2 className='font-bold'>Show Result</h2>
            <p className='max-w-[245px]'>Show the result of your ingredient picture to discover delicious recipes and meal suggestions.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default How
