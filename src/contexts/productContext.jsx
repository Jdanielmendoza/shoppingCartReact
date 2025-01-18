import { createContext, useState } from "react";
import { products as productJson } from "../mocks/products.json";

export const ContextProduct = createContext([]);

export const ProviderProduct = ({ children }) => {
  const [products, setProducts] = useState(productJson);
  const [filterProducts, setFilterProducts] = useState(products);

  function filterByCategory(category) {
    const responseFilter = products.filter(
      (product) => product.category === category
    );
    setFilterProducts(responseFilter);
  }
  return (
    <ContextProduct.Provider
      value={products, filterProducts, filterByCategory}
    >
      {children}
    </ContextProduct.Provider>
  );
};

