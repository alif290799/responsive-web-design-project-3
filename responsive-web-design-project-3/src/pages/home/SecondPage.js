import React from "react";
import image from "../../assets/Two Image.png";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import img from "../../assets/Icon.png";
import imgTitle from "../../assets/Title 1.png";
import { stats } from "../../arrays";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";

const SecondPage = () => {
    return (
        <>
            <Title img={imgTitle} />
            <div className="flex justify-between items-center">
                <div className="font-serif w-[30rem]">
                    <div className="">
                        <Heading>
                            We source sustainable & line caught Foods
                        </Heading>
                        <SubHeading>
                            Our commitment to sustainability and quality ensures
                            that every ingredient is responsibly sourced and of
                            the highest standard.
                        </SubHeading>
                        <Button>View Menu</Button>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <Paragraph
                                    key={index}
                                    head={stat.title}
                                    heading={stat.subtitle}
                                    subHeading={stat.description}
                                    img={img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <img
                        src={image}
                        alt="Restaurant Interior"
                        className="object-contain hidden md:flex md:h-[25rem] lg:h-[30rem] min-[1150px]:h-[36rem]"
                    />
                </div>
            </div>
        </>
    );
};

export default SecondPage;
