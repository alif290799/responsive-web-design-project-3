import React from 'react';

const Title = ({ img }) => {
  return (
    <div className="pb-7 sm:pb-0 md:pt-10 px-5 min-[1150px]:px-0">
      <img src={img} alt="" />
    </div>
  );
};

export default Title;
