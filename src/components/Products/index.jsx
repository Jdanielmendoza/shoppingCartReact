import "./Products.css";
import { products } from "../../mocks/products.json";
import Card from "../Card";
import { useContext, useState } from "react";
import { useEffect } from "react";
import Header from "../Header";
import { ContextProduct } from "../../contexts/productContext";
const Products = () => {
  const { filterProducts } = useContext(ContextProduct);

  return (
    <div className="">
      <Header />

      <ul className="grid place-items-center gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
        {filterProducts.map((product) => (
          <li className=" w-full h-full" key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
