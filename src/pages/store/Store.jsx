import "./styles/store.css";
import LayoutContainer from "../../components/layout/LayoutContainer";
import ContainerStore from "./components/container.store/ContainerStore";

const Store = () => {
  return (
    <LayoutContainer>
      <div className="store">
        <ContainerStore />
      </div>
    </LayoutContainer>
  );
};

export default Store;
