import React from "react";

const Heading = ({ children }) => {
    return (
        <h2 className="font-medium font-serif md:w-[30rem] py-5 text-white text-5xl sm:text-3xl min-[1150px]:text-6xl">
            {children}
        </h2>
    );
};

export default Heading;
