import React from 'react'
import Banner from '/about-banner.svg'
import pucuk from '/pucuk.svg';
import phone from '/phone-about.svg';
import play from '/store.svg';

function AboutApp() {
  const bannerStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '820px',
  };

  return (
    <section class="flex flex-col items-center pt-7 gap-4 " id="aboutApp" style={bannerStyle}>
      <h1 class="font-bold text-3xl">ABOUT OUR APP</h1>
      <img src={pucuk} alt="Line" />
      <p class="max-w-[1025px] text-center text-xl mb-8">
        Reseepe is a mobile application designed to improve food security and nutrition in Indonesia. Despite rich natural resources, many Indonesians struggle to access healthy meals. Our app helps users maximize their ingredients, reduce food waste, and create nutritious recipes based on what they have. By doing so, we aim to enhance access to safe food and support the global goal of "Zero Hunger."
      </p>
      <div class="max-w-[1440px] flex flex-col md:flex-row items-start gap-48">
        <div class="text-left flex-1 w-[740px]">
          <h2 class="font-bold text-3xl mb-4">Take a Look Around Our App</h2>
          <p class="text-xl mb-4 ">
            Explore our app, designed to empower users to make the most of their ingredients, reduce food waste, and promote efficient utilization. Snap a photo of any ingredient, and instantly receive a variety of delicious recipes and meal suggestions tailored to what you’ve captured, helping you create meals based on what you have available.
          </p>
          <p class="text-xl mb-4 w-[740px] pb-4">
            Our innovative technology not only provides personalized recipe recommendations but also encourages sustainable cooking practices. By utilizing what you already have in your pantry, you can minimize waste and discover new and exciting ways to prepare your favorite dishes. Join us in making cooking smarter, more sustainable, and incredibly fun!
          </p>
          <a href="" class="inline-flex items-center bg-white border-2 border-main rounded-sm px-4 py-2 text-custom text-m font-medium hover:bg-custom-hover">
            <img src={play} alt="Play Store" />
            Available on Play Store
            </a>
        </div>
        <img src={phone} alt="App screenshot" class="w-full max-w-[400px]" />
      </div>
    </section>



  )
}

export default AboutApp
