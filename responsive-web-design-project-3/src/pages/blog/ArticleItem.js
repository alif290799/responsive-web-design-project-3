import React from "react";
import { Link } from "react-router-dom";

const ArticleItem = ({ blog }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="shadow-md flex gap-2">
            <div>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-44 h-[10rem] object-cover"
                />
            </div>

            <div className="p-2 w-96">
                <h2 className="text-lg font-serif text-white mb-2">
                    {blog.title}
                </h2>
                <p className="text-gray-500 text-xs mb-2">{blog.excerpt}</p>
                <Link
                    to={`/blog/${blog.id}`}
                    className="text-indigo-600 text-xs hover:text-indigo-800"
                    onClick={scrollToTop}
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default ArticleItem;
