import { createContext, useEffect, useState } from "react";
import { products as productJson } from "../mocks/products.json";

export const ContextProduct = createContext([]);

export const ProviderProduct = ({ children }) => {
  const [products, setProducts] = useState(productJson);
  const [filterProducts, setFilterProducts] = useState(products);
  const [productsCategory, setCategorys] = useState(["all"]);
  const [selectedCategory, setSelectedCategory] = useState(productsCategory[0]);
  const getCategorys = () => {
    const categorysProd = [
      "all",
      ...new Set(products.map((prod) => prod?.category)),
    ];
    setCategorys(categorysProd);
  };
  useEffect(() => {
    getCategorys();
  }, []);
  useEffect(()=>{
      filterByCategory(selectedCategory); 
  },[selectedCategory])
  function filterByCategory(category) {
    if (category === productsCategory[0]) {
      setFilterProducts(products);
    } else {
      const responseFilter = products.filter(
        (product) => product.category === category
      );
      setFilterProducts(responseFilter);
    }
  }
  return (
    <ContextProduct.Provider value={{ products,filterProducts, productsCategory,selectedCategory,setSelectedCategory }}>
      {children}
    </ContextProduct.Provider>
  );
};
