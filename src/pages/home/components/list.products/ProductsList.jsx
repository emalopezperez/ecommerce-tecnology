import "./styles/productList.css";
import CardProduct from "../../../../components/cards.products/CardProducts";

const ProductsList = () => {
  return (
    <div className="container-products">
      <div className="h-[50px]">
        <h3 className="text-xl text-black">Nuestros productos</h3>
      </div>

      <div className="list-products">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default ProductsList;
