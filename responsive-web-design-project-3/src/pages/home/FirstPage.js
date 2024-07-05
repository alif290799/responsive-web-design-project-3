// src/pages/home/first-page/FirstPage.js
import React from "react";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import { paragraphs } from "../../arrays";
import { headerImage } from "../../imageImports";

const FirstPage = () => {
    return (
        <>
            <div className="pt-16 flex justify-between items-center">
                <div className="font-serif">
                    <Heading>We serve high-quality foods of all kinds.</Heading>
                    <SubHeading>
                        Delight in our culinary creations, crafted with passion
                        and precision.
                    </SubHeading>
                    <Button>View Menu</Button>
                    <div className="text-base sm:text-sm min-[1150px]:text-base">
                        {paragraphs.map((paragraph, index) => (
                            <Paragraph
                                heading={paragraph.heading}
                                key={index}
                                subHeading={paragraph.subHeading}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <img
                        src={headerImage}
                        alt=""
                        className="object-contain hidden sm:flex sm:h-[22rem] md:h-[25rem] lg:h-[30rem] min-[1150px]:h-[36rem]"
                    />
                </div>
            </div>
        </>
    );
};

export default FirstPage;
