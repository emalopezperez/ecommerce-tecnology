import LayoutContainer from "../../components/layout/LayoutContainer";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  console.log(id);

  return <LayoutContainer>ItemDetail</LayoutContainer>;
};

export default ItemDetail;
