import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebookF />, link: '/' },
  { icon: <FaTwitter />, link: '/' },
  { icon: <FaInstagram />, link: '/' },
  { icon: <FaLinkedinIn />, link: '/' },
];

const FooterSocials = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.link} className="text-gray-400 hover:text-white">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
