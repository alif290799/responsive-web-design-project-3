import React from "react";
import { Link } from "react-router-dom";

const BlogFooter = ({ blog }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="mt-8">
            <div className="flex space-x-2">
                {blog.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4">
                <h3 className="text-2xl font-bold mb-2">Related Posts</h3>
                <ul className="space-y-1">
                    {blog.relatedPosts.map((related) => (
                        <li key={related.id}>
                            <Link
                                to={`/blog/${related.id}`}
                                className="text-indigo-600 hover:text-indigo-800"
                                onClick={scrollToTop}
                            >
                                {related.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogFooter;
