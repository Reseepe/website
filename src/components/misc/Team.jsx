import React from 'react'
import banner from '/team-banner.svg';

function Team() {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '715px',
  };

  return (
    <section className='pt-8' id='team' style={bannerStyle}>
      Team
    </section>
  )
}

export default Team
