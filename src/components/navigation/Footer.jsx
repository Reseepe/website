import React from 'react';
import ig from '/ig.svg';
import fb from '/fb.svg';
import x from '/x.svg';
import gh from '/gh.svg';
import yt from '/yt.svg';
import garis from '/garisV2.svg';

const socialMediaIcons = [
  { src: ig, alt: "Instagram", href: "#" },
  { src: fb, alt: "Facebook", href: "#" },
  { src: x, alt: "X", href: "#" },
  { src: gh, alt: "GitHub", href: "https://github.com/Reseepe" },
  { src: yt, alt: "YouTube", href: "#" },
];

const dataFoot = [
  { name: "Home", nav: "#first" },
  { name: "About App", nav: "#aboutApp" },
  { name: "Our Team", nav: "#team" },
];

const SocialIcon = ({ src, alt, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group">
    <div className="p-2 rounded-full transition-all duration-300 group-hover:bg-black">
      <img src={src} alt={alt} className="transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  </a>
);

const Footer = () => (
  <section className="bg-[#067D83] h-[240px] flex flex-col items-center justify-center gap-1">
    <div className="flex space-x-7">
      {socialMediaIcons.map((icon, index) => (
        <SocialIcon key={index} src={icon.src} alt={icon.alt} href={icon.href} />
      ))}
    </div>
    <ul className="flex gap-5 items-center">
      {dataFoot.map(data => (
        <li key={data.name} className="flex items-center p-5">
          <a href={data.nav} className="text-white flex items-center relative group font-semibold hover:transform hover:translate-y-2 transition-transform duration-300">
            {data.name}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 ease-in-out group-hover:w-full rounded-md"></div>
          </a>
        </li>
      ))}
    </ul>
    <img src={garis} alt="Line" />
    <p className="font-semibold text-lg pt-4 text-white">Copyright ©2024 Reseepe. Design by Cloud Computing Team</p>
  </section>
);

export default Footer;
