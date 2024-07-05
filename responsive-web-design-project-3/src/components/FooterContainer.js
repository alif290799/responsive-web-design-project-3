import React from 'react';

const FooterContainer = ({ text, links }) => {
  return (
    <div className="mb-8 md:mb-0">
      <h2 className="text-lg font-bold mb-4">{text}</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2 font-thin text-base sm:text-sm lg:text-base">
            <a href={link.link} className="hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContainer;
