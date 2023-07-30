import ProductCard from "@/components/ProductCard";
import React from "react";

const FeaturedProducts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <div className="mx-auto mb-10 sm:text-center">
        <h2 className="mb-4 text-2xl font-semibold text-center md:text-3xl">
          Featured Products
        </h2>
      </div>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-12">
        {products.map((product) => (
          <ProductCard products={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
