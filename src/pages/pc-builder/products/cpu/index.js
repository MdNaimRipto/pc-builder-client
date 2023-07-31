import BuilderProductCard from "@/components/BuilderProductCard";
import MainLayout from "@/layouts/MainLayout";

const Processors = ({ products }) => {
  return (
    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-12">
      {products.data.map((product) => (
        <BuilderProductCard products={product} key={product._id} />
      ))}
    </div>
  );
};

export default Processors;

export async function getServerSideProps() {
  const url = `https://pc-builder-server-one.vercel.app/v1.0.0/products/getProductsByCategory?category=CPU`;
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

Processors.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
