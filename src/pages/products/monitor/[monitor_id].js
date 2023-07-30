import ProductDetails from "@/components/ProductDetails";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

const MonitorDetails = ({ details }) => {
  return <ProductDetails details={details.data} />;
};

export default MonitorDetails;

export async function getStaticPaths() {
  const url = `http://localhost:5875/v1.0.0/products/getAllProducts`;
  const res = await fetch(url);
  const products = await res.json();

  const paths = products.data.map((p) => ({
    params: { monitor_id: p._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const url = `http://localhost:5875/v1.0.0/products/getProductsByID/${params.monitor_id}`;
  const res = await fetch(url);
  const details = await res.json();

  return {
    props: {
      details,
    },
  };
}

MonitorDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
