import { useEffect } from "react";
import LayoutContainer from "../../components/layout/LayoutContainer";
import SlidersProducts from "../../components/sliders.products/SlidersProducts";
import ProductList from "./components/product-list/ProductList";
import BannerHome from "../../components/banner/BannerHome";
import Cta from "./components/cta/Cta";
import Incentive from "./components/incentives/Incentive";
import LogoClouds from "../../components/logos.clouds/logosClouds";
import Footer from "../../components/footer/Footer";
import { getLatestIncomes } from "../../adapters/adapters";

const Home = () => {
  const prueba = async () => {
    try {
      const latestIncomes = await getLatestIncomes();
      console.log(latestIncomes);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    prueba();
  }, []);

  return (
    <LayoutContainer>
      <BannerHome />

      <main className="w-full h-[100%] flex flex-col gap-[1%] md:gap-[4%] mt-5 ">
        <ProductList title={"Nuevos ingresos"} />
        <Cta />
        <SlidersProducts />
        <LogoClouds />

        <section>
          <Incentive />
          <Footer />
        </section>
      </main>
    </LayoutContainer>
  );
};

export default Home;
