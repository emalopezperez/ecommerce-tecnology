import LayoutContainer from "../../components/layout/LayoutContainer";
import Main from "../../components/main/Main";
import SlidersProducts from "../../components/sliders.products/SlidersProducts";
import ProductsList from "./components/list.products/ProductsList";
import BannerHome from "../../components/banner/BannerHome";

const Home = () => {
  return (
    <LayoutContainer>
      <Main />
      <SlidersProducts />
      <BannerHome />
      <ProductsList />
      <BannerHome />
    </LayoutContainer>
  );
};

export default Home;
