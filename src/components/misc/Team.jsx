import React from 'react';
import banner from '/team-banner.svg';
import pucuks from '/pucukV2.svg';
import robby from '/robby.svg';
import naufal from '/naufal.svg';
import aldo from '/aldo.svg';
import fattah from '/fattah.svg';
import ilham from '/ilham.svg';
import elang from '/elang.svg';
import alvian from '/alvian.svg';

const teamMembers = [
  {
    imgSrc: robby,
    name: 'Hanif Robby Rodhiya',
    role: 'Cloud Computing',
  },
  {
    imgSrc: naufal,
    name: 'M. Naufal Fawwaz Haryono',
    role: 'Cloud Computing',
  },
  {
    imgSrc: aldo,
    name: 'Revaldo Gemino Kantana Sagala',
    role: 'Machine Learning',
  },
  {
    imgSrc: alvian,
    name: 'Krishna Alvian Ramadhani',
    role: 'Machine Learning',
  },
];

const teamSecMembers = [
  {
    imgSrc: elang,
    name: 'Elang Satria Putra Buana',
    role: 'Machine Learning',
  },
  {
    imgSrc: ilham,
    name: 'Muhammad Alif Ilham',
    role: 'Mobile Development',
  },
  {
    imgSrc: fattah,
    name: 'Ahmad Fatahillah',
    role: 'Mobile Development',
  },
];

const TeamMember = ({ imgSrc, name, role }) => (
  <div className='text-center flex flex-col items-center justify-center gap-1'>
    <img src={imgSrc} alt={name} />
    <h1 className='font-bold text-xl pt-2 w-[270px]'>{name}</h1>
    <p className='text-lg'>{role}</p>
  </div>
);

const TeamSecMember = ({ imgSrc, name, role }) => (
  <div className='text-center flex flex-col items-center justify-center gap-1'>
    <img src={imgSrc} alt={name} />
    <h1 className='font-bold text-xl pt-2 w-[260px]'>{name}</h1>
    <p className='text-lg'>{role}</p>
  </div>
);

const Team = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '850px',
  };

  return (
    <section className='flex flex-col items-center pt-8 gap-4' id='team' style={bannerStyle}>
      <h1 className='text-white text-3xl font-bold'>OUR TEAM</h1>
      <img src={pucuks} alt="Line" />

      <div className='flex items-center justify-center text-center pt-7 gap-24 text-white'>
        {teamMembers.map(member => (
          <TeamMember 
            key={member.name} 
            imgSrc={member.imgSrc} 
            name={member.name} 
            role={member.role} 
          />
        ))}
      </div>

      <div className='flex items-center justify-center text-center pt-7 gap-24 text-white'>
        {teamSecMembers.map(member => (
          <TeamSecMember 
            key={member.name} 
            imgSrc={member.imgSrc} 
            name={member.name} 
            role={member.role} 
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
