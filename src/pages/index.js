import Banner from "@/components/pages/home/Banner";
import FeaturedProducts from "@/components/pages/home/FeaturedProducts";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedProducts />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
