import MainLayout from "@/layouts/MainLayout";

const Others = ({ products }) => {
  console.log(products);
  return <div>default</div>;
};

export default Others;

export async function getStaticProps() {
  const url = `http://localhost:5875/v1.0.0/products/getProductsByCategory?category=Others`;
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

Others.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
