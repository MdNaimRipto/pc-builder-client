import MainLayout from "@/layouts/MainLayout";

const StorageDevices = ({ products }) => {
  console.log(products);
  return <div>default</div>;
};

export default StorageDevices;

export async function getStaticProps() {
  const url = `http://localhost:5875/v1.0.0/products/getProductsByCategory?category=StorageDevice`;
  const res = await fetch(url);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

StorageDevices.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
