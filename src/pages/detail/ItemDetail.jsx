import LayoutContainer from "../../components/layout/LayoutContainer";
import Item from "./components/item/Item";
import SlidersProducts from "../../components/sliders.products/SlidersProducts";
import {getProducts} from "../../services/public.service"
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  return (
    <LayoutContainer>
      <Item id={id} />
      <SlidersProducts title={"Quienes vieron este producto también compraron"} />
    </LayoutContainer>
  );
};

export default ItemDetail;
