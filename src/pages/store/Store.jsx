import "./styles/store.css";
import { useState, useEffect } from "react";
import LayoutContainer from "../../components/layout/LayoutContainer";
import { getProducts } from "../../services/public.service";
import ContainerStore from "./components/container.store/ContainerStore";

const Store = () => {
  const [products, setProducts] = useState([]);

  const getItem = async () => {
    try {
      const products = await getProducts();
      return setProducts(products);
    } catch (error) {
      console.error("An error occurred:", error);
      return [];
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <LayoutContainer>
      <div className="store">
        <ContainerStore />
      </div>
    </LayoutContainer>
  );
};

export default Store;
