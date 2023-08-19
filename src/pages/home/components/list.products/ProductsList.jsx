import "./styles/productList.css";
import CardProduct from "../../../../components/cards.products/CardProducts";

const ProductsList = ({title}) => {
  return (
    <div className="container-products">
      <div className="h-[50px]">
        <h3 className="text-xl text-black">{title}</h3>
      </div>

      <div className="list-products">
        
      </div>
    </div>
  );
};

export default ProductsList;
