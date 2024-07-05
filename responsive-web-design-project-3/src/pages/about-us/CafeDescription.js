import React from "react";
import { imageaboutus } from "../../imageImports";

const CafeDescription = () => {
    return (
        <div className="relative">
            <img src={imageaboutus} alt="" />
            <div className="absolute top-10 sm:top-16 md:top-20 lg:top-28 h-[6.5rem] sm:h-28 md:h-40 lg:h-56 w-[40rem] left-5 flex flex-col justify-between">
                <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-serif sm:w-[22rem] md:w-[28rem] lg:w-[32rem]">
                    One of the best Cafes in{" "}
                    <span className="text-orange-300">New York</span>
                </div>
                <div className="text-[9px] lg:text-sm font-thin w-[16rem] md:w-[30rem]">
                    Experience unforgettable moments at Delish, where taste and
                    comfort meet. With a warm ambiance and a delectable menu,
                    this cafe is the perfect place to relax and enjoy quality
                    dishes. Visit us and discover why True Rich Cafe is a
                    favorite spot for many in New York.
                </div>
            </div>
        </div>
    );
};

export default CafeDescription;
