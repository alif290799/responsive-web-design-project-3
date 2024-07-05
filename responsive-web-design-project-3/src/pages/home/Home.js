import React from "react";
import Section from "../../components/Section";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";

const homePages = [
    <FirstPage />,
    <SecondPage />,
    <ThirdPage />,
    <FourthPage />,
    <FifthPage />,
    <SixthPage />,
    <SeventhPage />,
];

const Home = () => {
    return (
        <>
            {homePages.map((page) => (
                <Section>{page}</Section>
            ))}
        </>
    );
};

export default Home;
