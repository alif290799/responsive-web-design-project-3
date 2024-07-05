import React from "react";
import Section from "../../components/Section";
import { twoImage4 } from "../../imageImports";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import Contact from "../../components/Contact";

const ContactUs = () => {
    return (
        <>
            <Section>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-10 lg:gap-10">
                    <div className="flex flex-col gap-5">
                        <Heading>
                            Have a Question ? Get in Touch with us 👋
                        </Heading>
                        <SubHeading>
                            Fill up the Form and ou team will get back to within
                            24 hrs
                        </SubHeading>
                        <div className="flex justify-between items-center">
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-transparent border-solid border-[1px] w-32 md:w-56 border-gray-900 p-2"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border-solid border-[1px] w-32 md:w-56 border-gray-900 p-2"
                            />
                        </div>
                        <textarea
                            name=""
                            id=""
                            placeholder="Message"
                            className="h-48 bg-transparent w-full border-solid border-[1px] border-gray-900 p-2"
                        ></textarea>
                    </div>
                    <div>
                        <img
                            src={twoImage4}
                            alt=""
                            className="hidden lg:flex lg:h-[32rem] "
                        />
                    </div>
                </div>
            </Section>
            <Section>
                <Contact />
            </Section>
        </>
    );
};

export default ContactUs;
