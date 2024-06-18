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
    <section className="relative flex items-center justify-center bg-no-repeat bg-cover bg-center" style={bannerStyle} id='first'>
      <div className="mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0 pl-24">
          <img src={phone} alt="Phone" className="w-3/4 lg:w-full max-w-lg" />
        </div>
        <div className="w-full lg:w-1/2 text-left text-white mr-12 pl-10">
          <h1 className="text-4xl xl:text-[41px] font-bold mb-4 overflow-hidden whitespace-nowrap border-r-4 border-black animate-typing">
            Full of inclusive culinary recipes
          </h1>
          <div className="pr-0 lg:pr-24">
            <p className="mb-6 text-2xl w-[552px]">Discover delicious recipes with the ingredients you have on hand. Simply upload an image of your ingredients to get started!</p>
            <button onClick={scrollToAboutApp} className="bg-white text-main font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:rotate-6 active:scale-95">
              DISCOVER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default First;

{/* <section className="relative flex items-center justify-center bg-no-repeat bg-cover bg-center h-screen" style={bannerStyle} id='first'>
      <div className="mx-auto flex flex-col lg:flex-row items-start justify-between gap-20 w-full">
        <div className="w-full lg:w-[300px] flex justify-center lg:justify-start mb-8 lg:mb-0 pl-24">
          <img src={phone} alt="Phone" className="w-full" />
        </div>
        <div className="w-full flex-1 text-left text-white mr-12">
          <h1 className="text-2xl lg:text-5xl font-bold mb-4 overflow-hidden whitespace-nowrap border-r-4 border-black animate-typing">
            Full of inclusive culinary recipes
          </h1>
          <div className="pr-0 lg:pr-24">
            <p className="mb-6 text-2xl w-[552px]">Discover delicious recipes with the ingredients you have on hand. Simply upload an image of your ingredients to get started!</p>
            <button onClick={scrollToAboutApp} className="bg-white text-main font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:rotate-6 active:scale-95">
              DISCOVER NOW
            </button>
          </div>
        </div>
      </div>
    </section> */}

    // <section className='flex items-center' style={bannerStyle} id='first'>
    //   <div className='flex items-start justify-between w-full gap-20 bg-green-400'>
    //     <div className="w-full flex-1">
    //       <img src={phone} alt="Phone" className="" />
    //       </div>
    //     <div className="w-max-[800px] text-left text-white bg-red-400">
    //         <h1 className=" text-2xl xl:text-5xl font-bold mb-4 overflow-hidden whitespace-nowrap border-r-4 border-black animate-typing">
    //           Full of inclusive culinary recipes
    //         </h1>
    //         <div className="pr-0 lg:pr-24">
    //           <p className="mb-6 text-2xl w-[552px]">Discover delicious recipes with the ingredients you have on hand. Simply upload an image of your ingredients to get started!</p>
    //           <button onClick={scrollToAboutApp} className="bg-white text-main font-bold py-3 px-6 rounded-lg transform transition-all duration-300 hover:rotate-6 active:scale-95">
    //             DISCOVER NOW
    //           </button>
    //         </div>
    //       </div>
    //   </div>
    // </section>
