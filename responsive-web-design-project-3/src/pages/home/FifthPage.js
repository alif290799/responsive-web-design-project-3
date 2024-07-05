import React from "react";
import { petik, video, imagePerson } from "../../imageImports";

const FifthPage = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col gap-8">
                <img className="h-6 w-6" src={petik} alt="" />
                <div className="font-serif text-4xl md:text-3xl lg:text-4xl font-semibold md:w-[22rem] lg:w-[30rem]">
                    Success is not the key to happiness. Happiness is the key to
                    success. If you love what you are doing, you will be
                    successful.
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-semibold text-base md:text-sm lg:text-base">
                            Joheny Andro
                        </div>
                        <div className="font-thin text-base md:text-sm lg:text-base">
                            Bhubaneswar, Odisha
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img src={imagePerson} alt="" />
                    </div>
                </div>
                <div className="border-solid border-[1px] border-gray-500 "></div>
            </div>
            <div>
                <img src={video} alt="" />
            </div>
        </div>
    );
};

export default FifthPage;
