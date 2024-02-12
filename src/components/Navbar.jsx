import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  console.log("Navbar Rendered");
  const [model, setModel] = useState(false);
  const modelHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <nav className="w-full h-20 flex justify-around items-center text-gray-50">
        <div className="block">
          <div className="text-3xl">Octotech</div>
        </div>
        <ul className="hidden md:flex text-[14px] gap-10">
          <NavLink to="/#home">Home</NavLink>
          <NavLink to="/#services">Our Service's</NavLink>
          <NavLink to="/#technologies">Technologies</NavLink>
          <NavLink to="/#blogs">Blogs</NavLink>
          <NavLink to="/#contact">Contact Us</NavLink>
        </ul>
        <div className="md:hidden mb-2">
          <a className="text-5xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
