import React from 'react';

const MenuCardContainer = ({ children }) => {
  return (
    <>
      <div className="bg-black p-7">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">{children}</div>
      </div>
    </>
  );
};

export default MenuCardContainer;
