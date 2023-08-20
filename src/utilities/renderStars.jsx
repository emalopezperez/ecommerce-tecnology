import { AiFillStar } from "react-icons/ai";

const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<AiFillStar key={i} className="text-orange-600" />);
  }
  return stars;
};

export default  renderStars