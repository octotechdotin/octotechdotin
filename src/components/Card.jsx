import React from "react";

const Card = ({ items }) => {
  return (
    <div className="w-80 bg-[#1e293b] p-6 rounded-lg">
      <div className="my-3">
        <img src={items.logo} alt="logo" width={45} />
      </div>
      <div className="my-3">
        <h3 className="text-[#e2e8f0] text-[20px] font-semibold">
          {items.title}
        </h3>
        <p className="text-[#64748b] font-semibold">{items.description}</p>
        <p className="text-[#6366f1]">Learn More &#x2B95; </p>
      </div>
    </div>
  );
};

export default Card;
