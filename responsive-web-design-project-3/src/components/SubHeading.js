import React from "react";

const SubHeading = ({ children }) => {
    return (
        <p className="text-base md:w-[30rem] sm:text-sm min-[1150px]:text-md font-thin leading-6 text-gray-500">
            {children}
        </p>
    );
};

export default SubHeading;
