import React from "react";
import ArticleItem from "./ArticleItem";

const AllArticles = ({ blogs }) => {
    return (
        <div>
            <h2 className="text-4xl font-bold mb-6">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="relative">
                        <ArticleItem blog={blog} />
                        {blog.isFeatured && (
                            <span className="absolute top-0 left-0 text-xs font-thin bg-orange-500 text-white px-1 py-1">
                                Trending
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllArticles;
