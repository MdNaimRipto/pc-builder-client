import MainLayout from "@/layouts/MainLayout";

const Rams = ({ products }) => {
  console.log(products);
  return <div>default</div>;
};

export default Rams;

export async function getStaticProps() {
  const url = `http://localhost:5875/v1.0.0/products/getProductsByCategory?category=RAM`;
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

Rams.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
