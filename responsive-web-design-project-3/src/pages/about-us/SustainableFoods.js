import React from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import Paragraph from "../../components/Paragraph";
import { stats } from "../../arrays";
import { twoImage2 } from "../../imageImports";

const SustainableFoods = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="lg:w-[30rem]">
                <Heading>We source sustainable & line caught Foods</Heading>
                <SubHeading>
                    Our commitment to sustainability and quality ensures that
                    every ingredient is responsibly sourced and of the highest
                    standard.
                </SubHeading>
                <Button>View Menu</Button>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <Paragraph
                            key={index}
                            head={stat.title}
                            heading={stat.subtitle}
                            subHeading={stat.description}
                            img="../../assets/Icon.png"
                        />
                    ))}
                </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
                <img
                    src={twoImage2}
                    alt="Restaurant Interior"
                    className="object-contain hidden md:flex md:h-[25rem] lg:h-[30rem] min-[1150px]:h-[36rem]"
                />
            </div>
        </div>
    );
};

export default SustainableFoods;
