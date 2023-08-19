import "./styles/cardProducts.css";
import { AiFillStar } from "react-icons/ai";

const CardProducts = () => {
  return (
    <div className="product-card max-w-full md:max-w-[250px]">
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_657898-MLA46180356973_052021-O.webp"
        alt=""
      />
      <div className="product-card-info">
        <h3 className="">Apple AirPods Pro </h3>

        <div>
          <span className="starts">
            <AiFillStar className="text-orange-600" />
            <AiFillStar className="text-orange-600" />
            <AiFillStar className="text-orange-600" />
            <AiFillStar className="text-orange-600" />
          </span>
          <span className="text-gray-700 text-[14px]">
            <span className="">32 </span>review
          </span>
        </div>

        <div>
          <span className="text-black">$50.00</span>
          <span className="text-[14px] line-through text-red-600">$$30.00</span>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
