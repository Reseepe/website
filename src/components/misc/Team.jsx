import React from 'react'
import banner from '/team-banner.svg';
import pucuks from '/pucukV2.svg';

function Team() {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '715px',
  };

  return (
    <section className='flex flex-col items-center pt-8 gap-4' id='team' style={bannerStyle}>
      <h1 className='text-white text-3xl font-bold'>OUR TEAM</h1>
      <img src={pucuks} alt="Line" />
    </section>
  )
}

export default Team
