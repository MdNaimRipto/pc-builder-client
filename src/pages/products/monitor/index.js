import MainLayout from "@/layouts/MainLayout";

const Monitors = ({ products }) => {
  console.log(products);
  return <div>default</div>;
};

export default Monitors;

export async function getStaticProps() {
  const url = `http://localhost:5875/v1.0.0/products/getProductsByCategory?category=Monitor`;
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

Monitors.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
