import React from "react";
import BlogItem from "./BlogItem";

const FeaturedBlogs = ({ blogs }) => {
    const featuredBlogs = blogs.filter((blog) => blog.isFeatured);

    return (
        <div className="mb-8">
            <h2 className="text-4xl font-bold mb-6">Featured Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="col-span-2 relative">
                    {featuredBlogs.slice(0, 1).map((blog) => (
                        <div key={blog.id} className="relative h-full">
                            <BlogItem blog={blog} isFeatured />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-between">
                    {featuredBlogs.slice(1).map((blog) => (
                        <div
                            key={blog.id}
                            className="flex items-center space-x-4"
                        >
                            <BlogItem blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogs;
