import ProductCard from "@/components/ProductCard";
import MainLayout from "@/layouts/MainLayout";

const Motherboards = ({ products }) => {
  return (
    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-12">
      {products.data.map((product) => (
        <ProductCard products={product} key={product._id} />
      ))}
    </div>
  );
};

export default Motherboards;

export async function getStaticProps() {
  const url = `https://pc-builder-server-one.vercel.app/v1.0.0/products/getProductsByCategory?category=Motherboard`;
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

Motherboards.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
