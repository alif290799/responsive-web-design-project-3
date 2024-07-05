import React from "react";

const BlogCard = ({ date, title, desc, img }) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-5 p-5 bg-gray-900">
                <div className="font-thin">{date}</div>
                <div className="text-2xl font-serif font-semibold">{title}</div>
                <div className="font-thin">{desc}</div>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default BlogCard;
