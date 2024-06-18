import React from 'react';
import Banner from '/about-banner.svg';
import pucuk from '/pucuk.svg';
import phone from '/phone-about.svg';
import play from '/store.svg';

const SectionTitle = ({ children }) => (
  <h1 className="font-bold text-3xl">{children}</h1>
);

const AboutApp = () => {
  return (
    <section className="flex flex-col items-center pt-7 gap-4" id="aboutApp" style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '820px' }}>
      <SectionTitle>ABOUT OUR APP</SectionTitle>
      <img src={pucuk} alt="Line" />
      <p className="max-w-[1025px] text-center text-xl mb-8">
        Reseepe is a mobile application designed to improve food security and nutrition in Indonesia. Despite rich natural resources, many Indonesians struggle to access healthy meals. Our app helps users maximize their ingredients, reduce food waste, and create nutritious recipes based on what they have. By doing so, we aim to enhance access to safe food and support the global goal of "Zero Hunger."
      </p>
      <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-24 px-10">
        <div className="text-left flex-1 w-[740px]">
          <h2 className="font-bold text-3xl mb-4">Take a Look Around Our App</h2>
          <p className="text-lg xl:text-xl mb-4 max-w-[700px] xl:max-w-[800px]">
            Explore our app, designed to empower users to make the most of their ingredients, reduce food waste, and promote efficient utilization. Snap a photo of any ingredient, and instantly receive a variety of delicious recipes and meal suggestions tailored to what you’ve captured, helping you create meals based on what you have available.
          </p>
          <p className="text-lg xl:text-xl mb-4 max-w-[700px] xl:max-w-[800px] pb-4">
            Our innovative technology not only provides personalized recipe recommendations but also encourages sustainable cooking practices. By utilizing what you already have in your pantry, you can minimize waste and discover new and exciting ways to prepare your favorite dishes. Join us in making cooking smarter, more sustainable, and incredibly fun!
          </p>
          <a href="" className="inline-flex items-center bg-white border-2 border-main rounded-sm px-4 py-2 text-custom text-m font-medium hover:bg-main hover:text-white transition-colors duration-300">
            <img src={play} alt="Play Store" className="mr-2" />
            Available on Play Store
          </a>
        </div>
        <img src={phone} alt="App screenshot" className="w-full max-w-[350px] xl:max-w-[400px]" />
      </div>
    </section>
  );
};

export default AboutApp;
