import React, { createContext, useState } from "react";

export const BuilderContext = createContext();

const ProductContext = ({ children }) => {
  const [builderProduct, setBuilderProduct] = useState([]);

  console.log(builderProduct);

  const value = { builderProduct, setBuilderProduct };
  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
};

export default ProductContext;
