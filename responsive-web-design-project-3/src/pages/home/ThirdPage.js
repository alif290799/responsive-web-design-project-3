import React from "react";
import Title from "../../components/Title";
import imgTitle from "../../assets/Title 2.png";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import MenuCardContainer from "../../components/CardContainer";
import MenuCard from "../../components/Card";
import { items } from "../../arrays";
import { icon1, icon2, icon3, icon4, icon5, icon6 } from "../../imageImports";

const imgs = [icon1, icon2, icon3, icon4, icon5, icon6];

const ThirdPage = () => {
    return (
        <>
            <Title img={imgTitle} />
            <div className="flex justify-between items-start sm:items-center flex-col md:flex-row">
                <Heading>
                    We all have to eat, so why not do it beautifully?
                </Heading>
                <SubHeading>
                    Through our diverse menu, we strive to bring you the finest
                    culinary delights, each dish crafted with passion and
                    precision to provide an exceptional dining experience. From
                    the freshest ingredients to innovative culinary techniques,
                    we ensure every meal is not just food, but a memorable
                    experience. Join us to savor the extraordinary flavors and
                    indulge in the art of fine dining.
                </SubHeading>
            </div>
            <div className="pt-10">
                <MenuCardContainer>
                    {items.map((item, index) => (
                        <MenuCard
                            key={index}
                            heading={item.title}
                            subHeading={item.description}
                            img={imgs[index]}
                        />
                    ))}
                </MenuCardContainer>
            </div>
        </>
    );
};

export default ThirdPage;
