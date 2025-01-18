import { createContext, useEffect, useState } from "react";
import { products as productJson } from "../mocks/products.json";

export const ContextProduct = createContext([]);

export const ProviderProduct = ({ children }) => {
  const [products, setProducts] = useState(productJson);
  const [filterProducts, setFilterProducts] = useState(products);
  const [maxPrice, setMaxPrice] = useState(20);
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

  useEffect(() => {
    filterByCategoryAndPrice(selectedCategory);
  }, [selectedCategory, maxPrice]);

  function filterByCategoryAndPrice(category, price = maxPrice) {
    if (category === productsCategory[0]) {
      const responseFilter = products.filter(
        (product) => product.price <= price
      );
      setFilterProducts(responseFilter);
    } else {
      const responseFilter = products.filter(
        (product) => product.category === category && product.price <= price
      );
      setFilterProducts(responseFilter);
    }
  }
  return (
    <ContextProduct.Provider
      value={{
        products,
        filterProducts,
        productsCategory,
        selectedCategory,
        setSelectedCategory,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </ContextProduct.Provider>
  );
};
