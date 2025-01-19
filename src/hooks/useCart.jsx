import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  function addProduct(product){
    setCart([...cart,product])
  }
  return {
    cart,
    addProduct
  };
};

export default useCart;
