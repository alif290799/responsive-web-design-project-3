import React from "react";
import AboutUsCard from "../../components/AboutUsCard";
import { history } from "../../arrays";

const HistorySection = () => {
    return (
        <div className="w-full bg-gray-900 flex justify-center items-center py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 items-start">
                {history.map((history, index) => (
                    <AboutUsCard
                        key={index}
                        year={history.year}
                        milestone={history.milestone}
                        desc={history.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default HistorySection;
