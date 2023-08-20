import "./styles/cardProducts.css";
import renderStars from "../../utilities/renderStars";

// eslint-disable-next-line react/prop-types
const CardProducts = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, rating, imageSrc, id, reviewCount } = product;

  return (
    <div key={id} className="product-card max-w-full md:max-w-[250px]">
      <img src={imageSrc} alt="img/cardProduct" />
      <div className="product-card-info">
        <h3 className="">{name}</h3>

        <div>
          <span className="starts">{renderStars(rating)}</span>
          <span className="text-gray-700 text-[14px]">
            <span className="">{reviewCount} </span>review
          </span>
        </div>

        <div>
          <span className="text-black">{price}</span>
          <span className="text-[14px] line-through text-red-600">$$30.00</span>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
