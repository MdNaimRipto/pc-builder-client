import MainLayout from "@/layouts/MainLayout";

const Processors = ({ products }) => {
  console.log(products);
  return <div>default</div>;
};

export default Processors;

export async function getStaticProps() {
  const url = `http://localhost:5875/v1.0.0/products/getProductsByCategory?category=PSU`;
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
