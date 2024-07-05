import React from "react";

const AboutUsCard = ({ year, milestone, desc }) => {
    return (
        <div className="relative p-5 flex flex-col gap-4 h-[13rem] lg:h-[15rem] bg-gray-800 text-white shadow-lg">
            <div className="relative">
                <div className="absolute top-0 left-0 w-[3.3rem] rounded h-1 bg-white"></div>
            </div>
            <div className="text-2xl font-bold text-orange-300">{year}</div>
            <div className="font-serif text-lg">{milestone}</div>
            <div className="text-sm font-thin">{desc}</div>
        </div>
    );
};

export default AboutUsCard;
