import React, { useState } from "react";
import Section from "../../components/Section";
import Title from "../../components/Title";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import MenuCardContainer from "../../components/MenuCardContainer";
import MenuCard from "../../components/MenuCard";
import {
    imageMenu1,
    imageMenu2,
    imageMenu3,
    imageMenu4,
    imageMenu5,
    imageMenu6,
    imageMenu10,
    imageMenu11,
    imageMenu12,
    imageMenu13,
    imageMenu14,
    imageMenu15,
    title3,
} from "../../imageImports";
import { menus, categories } from "../../arrays";

const menuImage = [
    imageMenu1,
    imageMenu2,
    imageMenu3,
    imageMenu4,
    imageMenu5,
    imageMenu6,
    imageMenu10,
    imageMenu11,
    imageMenu12,
    imageMenu13,
    imageMenu14,
    imageMenu15,
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <Section>
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
            <div className="pb-10 py-5">
                <ul className="flex justify-center sm:justify-start items-center md:gap-10 gap-7 font-serif text-xs sm:text-sm md:text-base">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <button
                                className={`${selectedCategory === category ? "text-white" : "text-gray-500"}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <MenuCardContainer>
                    {menus.map((menu, index) => (
                        <MenuCard
                            key={index}
                            menu={menu.menu}
                            price={menu.price}
                            img={menuImage[index]}
                        />
                    ))}
                </MenuCardContainer>
            </div>
        </Section>
    );
};

export default Menu;
