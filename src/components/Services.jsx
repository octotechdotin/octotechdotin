import React from "react";
import Card from "./Card";
import data from "../data.json";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center w-full font-bold pt-10 pb-10"
    >
      <div>
        <h2 className="text-5xl text-white text-center">Service's</h2>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 ">
        {data.map((item, id) => (
          <Card key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
