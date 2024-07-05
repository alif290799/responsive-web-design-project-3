import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="mt-5 sm:mt-5 min-[1150px]:mt-8">
      <a
        href="/"
        className="inline-block bg-orange-300 border border-transparent py-2 px-7 font-medium text-black hover:bg-orange-500"
      >
        {children}
      </a>
    </button>
  );
};

export default Button;
