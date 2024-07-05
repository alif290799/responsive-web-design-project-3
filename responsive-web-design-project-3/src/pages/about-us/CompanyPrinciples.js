import React from "react";

const CompanyPrinciples = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start gap-0 lg:gap-24 ">
            <div className="md:w-[50%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">
                Things our company stands for
            </div>
            <div className="md:w-[50%] flex flex-col gap-5">
                <div className="font-serif text-sm lg:text-base pt-5 md:pt-0">
                    The Principles That Guide Delish Cafe
                </div>
                <div className="font-thin text-xs lg:text-sm text-gray-400">
                    At Delish Cafe, we uphold the highest standards of quality,
                    customer satisfaction, community support, and creative
                    passion in everything we do. We are dedicated to providing
                    an exceptional experience for every customer and making a
                    positive impact on our community and the environment.
                </div>
            </div>
        </div>
    );
};

export default CompanyPrinciples;
