import React from "react";
import { twoImage3 } from "../../imageImports";
import Section from "../../components/Section";
import Contact from "../../components/Contact";

const OurStory = () => {
    return (
        <>
            <Section>
                <div className="flex justify-center items-center pt-14">
                    <div className="flex flex-col justify-center items-center gap-10 sm:flex-row sm:justify-between sm:items-start md:gap-10 lg:gap-16">
                        <div className="flex flex-col gap-7 sm:w-1/2">
                            <div className="text-6xl font-serif">Our Story</div>
                            <div className="text-sm font-thin text-gray-400">
                                Delish Cafe started with a simple idea: to
                                create a welcoming space for quality coffee and
                                delicious food. From a small neighborhood cafe,
                                we have become a beloved New York spot, known
                                for our excellence and culinary passion.
                            </div>
                            <div>
                                <img
                                    src={twoImage3}
                                    alt=""
                                    className="h-[26rem] md:h-[28rem] lg:h-[32rem] w-full object-fill"
                                />
                            </div>
                        </div>
                        <div className="sm:w-1/2 flex flex-col gap-7">
                            <div className="font-serif text-3xl">
                                One of the Best Cafes in{" "}
                                <span className="text-orange-300">
                                    New York
                                </span>
                            </div>
                            <div className="font-thin lg:text-base md:text-sm text-gray-400 flex flex-col gap-3">
                                <p>
                                    Delish Cafe stands out not only for its
                                    exceptional coffee and food but also for its
                                    dedication to providing a memorable
                                    experience for every customer. Our carefully
                                    curated menu features a variety of artisanal
                                    drinks and dishes made from the finest
                                    ingredients. We believe in sourcing our
                                    products responsibly and supporting local
                                    communities. From the moment you step into
                                    Delish Cafe, you are greeted with the
                                    inviting aroma of freshly brewed coffee and
                                    the warm smiles of our friendly staff. Our
                                    baristas are skilled in the art of coffee
                                    making, ensuring that each cup is a perfect
                                    blend of flavor and aroma.{" "}
                                </p>
                                <p>
                                    Our chefs, on the other hand, are passionate
                                    about creating dishes that not only taste
                                    amazing but also look stunning. We take
                                    pride in our commitment to sustainability.
                                    All our ingredients are sourced from local
                                    farms and suppliers who share our values of
                                    quality and environmental stewardship. Our
                                    cafe is designed to be a cozy and
                                    comfortable space where you can relax, work,
                                    or catch up with friends. The ambient
                                    lighting, comfortable seating, and
                                    thoughtfully designed interiors all
                                    contribute to making Delish Cafe a unique
                                    and enjoyable destination. Whether you are
                                    here for a quick coffee break, a leisurely
                                    brunch, or a business meeting, Delish Cafe
                                    offers an experience that is both delightful
                                    and unforgettable. Visit us and discover why
                                    we are considered one of the best cafes in
                                    New York.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <Contact />
            </Section>
        </>
    );
};

export default OurStory;
