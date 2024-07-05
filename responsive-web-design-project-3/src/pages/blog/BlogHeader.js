import React from "react";

const BlogHeader = ({ blog }) => {
    return (
        <div className="mb-8">
            <h1 className="text-5xl font-serif mb-4">{blog.title}</h1>
            <div className="flex items-center mb-4">
                <img
                    src={blog.authorAvatar}
                    alt={blog.author}
                    className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                    <p className="text-lg font-medium">{blog.author}</p>
                    <p className="text-gray-600">{blog.date}</p>
                </div>
            </div>
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover"
            />
        </div>
    );
};

export default BlogHeader;
