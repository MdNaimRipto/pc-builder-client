import ProductDetails from "@/components/ProductDetails";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

const RAMDetails = ({ details }) => {
  return <ProductDetails details={details.data} />;
};

export default RAMDetails;

export async function getStaticPaths() {
  const url = `https://pc-builder-server-one.vercel.app/v1.0.0/products/getAllProducts`;
  const res = await fetch(url);
  const products = await res.json();

  const paths = products.data.map((p) => ({
    params: { ram_id: p._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const url = `https://pc-builder-server-one.vercel.app/v1.0.0/products/getProductsByID/${params.ram_id}`;
  const res = await fetch(url);
  const details = await res.json();

  return {
    props: {
      details,
    },
  };
}

RAMDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
