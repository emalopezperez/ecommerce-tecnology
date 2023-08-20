import LayoutContainer from "../../components/layout/LayoutContainer";
import SlidersProducts from "../../components/sliders.products/SlidersProducts";
import ProductList from "./components/product-list/ProductList";
import BannerHome from "../../components/banner/BannerHome";
import Cta from "./components/cta/Cta";
import Incentive from "./components/incentives/Incentive";
import LogoClouds from "../../components/logos.clouds/logosClouds";

const Home = () => {
  return (
    <LayoutContainer>
      <BannerHome />

      <main className="w-full h-[100%] flex flex-col gap-[1%] md:gap-[4%] mt-5 ">
        <ProductList title={"Nuevos ingresos"} />
        <Cta />
        <SlidersProducts title={"Productos mas vendidos"} />
      </main>
      <LogoClouds />
      <Incentive />
    </LayoutContainer>
  );
};

export default Home;
