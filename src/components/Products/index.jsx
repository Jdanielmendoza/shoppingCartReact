import "./Products.css";
import { products } from "../../mocks/products.json";
import Card from "../Card";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [filterProducts,setFilterProducts] = useState(products); 
  const [category, setCategory] = useState("beauty");

  function filterCategory(category = "fragrances") {
    return products.filter(product => product.category === category) ;
  }
  useEffect(()=>{
    //setFilterProducts(filterCategory(category))
  },[])

  return (
    <div className="">
      <ul className="grid place-items-center gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
        {filterProducts.map((product) => (
          <li className="h-full" key={product.id}>
            <Card product={product} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
