import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog, isFeatured }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (isFeatured) {
        return (
            <div className="relative">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[26rem] object-cover"
                />
                <div className="absolute top-0 left-0 text-sm font-semibold bg-orange-500 text-white px-2 py-1">
                    Trending
                </div>
                <div className="absolute bottom-0 left-0 p-5 bg-black bg-opacity-50 text-white">
                    <h3 className="text-3xl font-serif">{blog.title}</h3>
                    <p className="mt-2 flex items-center">
                        <img
                            src={blog.authorAvatar}
                            alt={blog.author}
                            className="w-10 h-10 rounded-full mr-4"
                        />
                        <span className="font-thin">{blog.author}</span>
                        <span className="ml-4 text-gray-300 text-sm">
                            {blog.date}
                        </span>
                    </p>
                    <Link
                        to={`/blog/${blog.id}`}
                        className="mt-2 inline-block text-indigo-400 hover:text-indigo-600"
                        onClick={scrollToTop}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex items-center space-x-4">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-24 h-[8rem] object-cover"
                />
                <div>
                    <h3 className="text-xl font-serif">{blog.title}</h3>
                    <p className="text-gray-500 text-xs">{blog.excerpt}</p>
                    <Link
                        to={`/blog/${blog.id}`}
                        className="text-indigo-600 hover:text-indigo-800"
                        onClick={scrollToTop}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        );
    }
};

export default BlogItem;
