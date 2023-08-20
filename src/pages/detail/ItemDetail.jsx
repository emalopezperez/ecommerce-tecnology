import LayoutContainer from "../../components/layout/LayoutContainer";
import Item from "./components/item/Item";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  console.log(id);

  return <LayoutContainer>
    <Item id={id} />
  </LayoutContainer>;
};

export default ItemDetail;
