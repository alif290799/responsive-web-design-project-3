import React from "react";
import Title from "../../components/Title";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import MenuCardContainer from "../../components/MenuCardContainer";
import MenuCard from "../../components/MenuCard";
import Button from "../../components/Button";
import {
    imageMenu1,
    imageMenu2,
    imageMenu3,
    imageMenu4,
    imageMenu5,
    imageMenu6,
    title3,
} from "../../imageImports";
import { fourthmenus } from "../../arrays";

const menuImage = [
    imageMenu1,
    imageMenu2,
    imageMenu3,
    imageMenu4,
    imageMenu5,
    imageMenu6,
];

const FourthPage = () => {
    return (
        <>
            <Title img={title3} />
            <div className="flex justify-between items-start sm:items-center flex-col md:flex-row">
                <Heading>Discover our menu chart</Heading>
                <SubHeading>
                    Explore our most popular picks, each crafted with care and
                    attention to detail. From rich, aromatic coffees to
                    delightful desserts and hearty meals, our menu offers
                    something for every taste and occasion. Enjoy the finest
                    culinary experiences with our carefully selected dishes, all
                    made to perfection to satisfy your cravings.
                </SubHeading>
            </div>
            <p className="text-sm font-serif pt-10 md:pt-3 pb-10 px-5 min-[1150px]:px-0">
                Most Popular Picks
            </p>
            <div className="px-5 min-[1150px]:px-0">
                <MenuCardContainer>
                    {fourthmenus.map((menu, index) => (
                        <MenuCard
                            key={index}
                            menu={menu.menu}
                            price={menu.price}
                            img={menuImage[index]}
                        />
                    ))}
                </MenuCardContainer>
            </div>
            <div className="flex justify-center items-center">
                <Button>View Menu</Button>
            </div>
        </>
    );
};

export default FourthPage;
