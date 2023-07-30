import Banner from "@/components/pages/home/Banner";
import Categories from "@/components/pages/home/Categories";
import FeaturedProducts from "@/components/pages/home/FeaturedProducts";
import MainLayout from "@/layouts/MainLayout";

export default function Home({ products }) {
  if (!products) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <Banner />
      <Categories />
      <FeaturedProducts products={products.data} />
    </>
  );
}

export async function getStaticProps() {
  const url = `http://localhost:5875/v1.0.0/products/getFeaturedProducts`;
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
