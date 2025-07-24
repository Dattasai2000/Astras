import React from "react";
import Cards from "./Cards";
import { featuredproductdata } from "../organism/Featuredproducts";

export default function Productcard({ addToCart }) {
  return (
    <div className="flex flex-wrap justify-between ">
      {featuredproductdata.map((item,index) => (
        <Cards
          key={index}
           product={item}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
