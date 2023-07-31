import ProductDetails from "@/components/ProductDetails";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

const ProcessorDetails = ({ details }) => {
  return <ProductDetails details={details.data} />;
};

export default ProcessorDetails;

export async function getStaticPaths() {
  const url = `https://pc-builder-server-one.vercel.app/v1.0.0/products/getAllProducts`;
  const res = await fetch(url);
  const products = await res.json();

  const paths = products.data.map((p) => ({
    params: { cpu_id: p._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const url = `https://pc-builder-server-one.vercel.app/v1.0.0/products/getProductsByID/${params.cpu_id}`;
  const res = await fetch(url);
  const details = await res.json();

  return {
    props: {
      details,
    },
  };
}

ProcessorDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
