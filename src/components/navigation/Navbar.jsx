import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo-2.png';

const Navbar = () => {
  const navData = [
    {
      name: "Home",
      nav: "#first"
    },
    {
      name: "About App",
      nav: "#aboutApp"
    },
    {
      name: "Our Team",
      nav: "#team"
    },
  ];

  return (
      <nav className='w-full h-24 bg-main flex items-center justify-between text-white text-xl px-14 sticky top-0 z-50'>
        <NavLink>
          <img src={logo} alt="logo" className='h-auto w-72'/>
        </NavLink>
        <ul className='flex gap-8 items-center'>
          {navData.map(data => (
            <li key={data.name} className='flex items-center p-5'>
              <a href={data.nav} className='text-white flex items-center relative group font-semibold hover:transform hover:translate-y-2 transition-transform duration-300'>
                {data.name}
                <div className='absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 ease-in-out group-hover:w-full rounded-md'></div>
              </a>
            </li>
          ))}
        </ul>
        <button className='bg-white text-main font-semibold rounded-lg px-3 py-1'>Get The App</button>
      </nav>
  );
};

export default Navbar;
