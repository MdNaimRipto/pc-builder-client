import MainLayout from "@/layouts/MainLayout";

const Motherboards = ({ products }) => {
  console.log(products);
  return <div>default</div>;
};

export default Motherboards;

export async function getStaticProps() {
  const url = `http://localhost:5875/v1.0.0/products/getProductsByCategory?category=Motherboard`;
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
