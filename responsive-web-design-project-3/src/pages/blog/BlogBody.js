import React from "react";

const BlogBody = ({ content }) => {
    return (
        <div className="prose max-w-4xl mx-auto text-justify">
            {content.map((section, index) => (
                <div key={index}>
                    <h2 className="text-xl font-semibold pt-2">
                        {section.heading}
                    </h2>
                    <p className="pt-2 font-thin">{section.text}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogBody;
