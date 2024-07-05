import React from "react";
import FeaturedBlogs from "./FeaturedBlogs";
import AllArticles from "./AllArticles";
import blogData from "./blogData";
import Section from "../../components/Section";
import Contact from "../../components/Contact";

const BlogList = () => {
    return (
        <div className="pt-10">
            <Section>
                <FeaturedBlogs blogs={blogData} />
                <AllArticles blogs={blogData} />
            </Section>
            <Section>
                <Contact />
            </Section>
        </div>
    );
};

export default BlogList;
