import React from 'react';

const MenuCard = ({ img, heading, subHeading, index }) => {
  return (
    <div key={index} className="flex flex-col gap-5 ">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="font-serif text-4xl font-semibold">{heading}</div>
      <div className="font serif text-sm font-thin">{subHeading}</div>
    </div>
  );
};

export default MenuCard;
