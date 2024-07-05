import React from "react";
import Title from "../../components/Title";
import Section from "../../components/Section";
import SustainableFoods from "./SustainableFoods";
import CafeDescription from "./CafeDescription";
import HistorySection from "./HistorySection";
import CompanyPrinciples from "./CompanyPrinciples";
import Contact from "../../components/Contact";

const AboutUs = () => {
    return (
        <>
            <Section>
                <Title img="../../assets/Title 1.png" />
                <SustainableFoods />
            </Section>
            <Section>
                <CafeDescription />
                <HistorySection />
            </Section>
            <Section>
                <CompanyPrinciples />
            </Section>
            <Section>
                <Contact />
            </Section>
        </>
    );
};

export default AboutUs;
