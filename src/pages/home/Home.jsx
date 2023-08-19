import { useState, useEffect } from "react";
import LayoutContainer from "../../components/layout/LayoutContainer";
import SlidersProducts from "../../components/sliders.products/SlidersProducts";
import ProductList from "./components/product-list/ProductList";
import BannerHome from "../../components/banner/BannerHome";
import Newsletter from "../../components/newsletter/Newsletter";
import Cta from "./components/cta/Cta";
import Incentive from "./components/incentives/Incentive";
import LogoClouds from "../../components/logos.clouds/logosClouds";
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
      <ProductList title={"Ultimos ingresos"} />
      <ProductList title={"Ultimos ingresos"} />
      <Cta />
      <SlidersProducts />
      <Incentive />
    </LayoutContainer>
  );
};

export default Home;
