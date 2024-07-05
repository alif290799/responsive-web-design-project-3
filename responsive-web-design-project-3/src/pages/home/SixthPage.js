import React from "react";
import Heading from "../../components/Heading";
import MenuCardContainer from "../../components/MenuCardContainer";
import BlogCard from "../../components/BlogCard";
import img1 from "../../assets/Image Menu 7.png";
import img2 from "../../assets/Image Menu 8.png";
import img3 from "../../assets/Image Menu 9.png";
import { blogs } from "../../arrays";

const imgs = [img1, img2, img3];

const SixthPage = () => {
    return (
        <>
            <Heading>Read Our Lastest Blog</Heading>
            <div className="pt-5">
                <MenuCardContainer>
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            date={blog.date}
                            title={blog.title}
                            desc={blog.desc}
                            img={imgs[index]}
                        />
                    ))}
                </MenuCardContainer>
            </div>
        </>
    );
};

export default SixthPage;
