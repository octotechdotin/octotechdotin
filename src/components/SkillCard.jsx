import React from "react";
import reactlogo from "../assets/icons/react.png";
const SkillCard = () => {
  return (
    <div className="bg-[#282e36] h-44 w-44 flex items-center justify-center rounded-lg border-[2px] border-[#9d9d9d11]">
      <div>
        <img
          src={reactlogo}
          alt="tech-logo"
          width={76}
          className="my-2 block mx-auto bg-gray-700 p-3 rounded-full shadow-sm"
        />
        <h4 className="text-center text-gray-200">React</h4>
      </div>
    </div>
  );
};

export default SkillCard;
