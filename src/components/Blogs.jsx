import React from "react";

const Blogs = () => {
  return (
    <div
      id="blogs"
      className="flex flex-col items-center justify-center w-full font-bold pt-10 pb-10"
    >
      <div>
        <h2 className="text-5xl text-white text-center">Blogs</h2>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10 "></div>
    </div>
  );
};

export default Blogs;
