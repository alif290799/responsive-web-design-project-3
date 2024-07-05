import React from 'react';

const Paragraph = ({ head, img, heading, subHeading, index }) => {
  return (
    <div key={index} className=" mt-5 min-[1150px]:mt-6">
      <div className="flex items-center gap-2">
        <img className="h-5" src={img} alt="" />
        <p className="text-xl font-bold">{head}</p>
      </div>
      <p className="font-bold">{heading}</p>
      <p className="font-sans font-thin text-gray-400">{subHeading}</p>
    </div>
  );
};

export default Paragraph;
