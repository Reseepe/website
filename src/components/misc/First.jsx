import React from 'react';
import banner from '/banner.png';
import phone from '/phone-home.png';

const First = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '698px',
  };

  const scrollToAboutApp = () => {
    const aboutAppElement = document.getElementById('aboutApp');
    if (aboutAppElement) {
      aboutAppElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center bg-no-repeat bg-cover bg-center h-screen" style={bannerStyle} id='first'>
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0 pl-24">
          <img src={phone} alt="Phone Home" className="w-3/4 lg:w-full max-w-lg" />
        </div>
        <div className="w-full lg:w-1/2 text-left text-white mr-12">
          <h1 className="text-2xl lg:text-5xl font-bold mb-4">Full of inclusive culinary recipes</h1>
          <div className="pr-0 lg:pr-24">
            <p className="mb-6 text-2xl w-[552px]">Discover delicious recipes with the ingredients you have on hand. Simply upload an image of your ingredients to get started!</p>
            <button onClick={scrollToAboutApp} className="bg-white text-main font-bold py-3 px-6 rounded-lg">DISCOVER NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
