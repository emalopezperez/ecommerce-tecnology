import "./styles/store.css";
import LayoutContainer from "../../components/layout/LayoutContainer";
import ContainerStore from "./components/container.store/ContainerStore";
import Header from "./components/header/Header";

const Store = () => {
  return (
    <LayoutContainer>
      <div className="store">
        <Header />
        <ContainerStore />
      </div>
    </LayoutContainer>
  );
};

export default Store;
