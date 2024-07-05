import React from "react";
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import BlogFooter from "./BlogFooter";
import Section from "../../components/Section";

const BlogContent = ({ blog }) => {
    if (!blog) return <p>Blog not found</p>;

    return (
        <div className="bg-gray-950 text-white pt-20 px-5 min-[1150px]:px-0">
            <Section>
                <BlogHeader blog={blog} />
                <BlogBody content={blog.content} />
                <BlogFooter blog={blog} />
            </Section>
        </div>
    );
};

export default BlogContent;
