import React from "react";
import FooterDescription from "./FooterDescription";
import FooterSocials from "./FooterSocials";
import { companyLinks, servicesLinks, supportLinks } from "../arrays";
import FooterContainer from "./FooterContainer";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto md:py-16">
                <div className="flex px-5 min-[1150px]:px-0 flex-col md:flex-row md:justify-between items-start md:items-start">
                    <FooterDescription />
                    <div className="flex flex-row gap-16 text-start md:text-left">
                        <FooterContainer
                            text={"Company"}
                            links={companyLinks}
                        />
                        <FooterContainer
                            text={"Services"}
                            links={servicesLinks}
                        />
                        <FooterContainer
                            text={"Support"}
                            links={supportLinks}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-gray-950 py-4">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm mb-4 md:mb-0">
                        &copy; 2024 Delisch | All Rights Reserved.
                    </div>
                    <FooterSocials />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
