import React from "react";

const MenuCard = ({ menu, price, img }) => {
    return (
        <>
            <div className="flex flex-col">
                <img src={img} alt="" />
                <div className="flex justify-between items-center p-3 bg-gray-900">
                    <div className="font-serif">{menu}</div>
                    <div className="font-thin">{price}</div>
                </div>
            </div>
        </>
    );
};

export default MenuCard;
