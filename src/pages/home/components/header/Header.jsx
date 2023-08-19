import "./styles/main.css";
import Banners from "../banners/Banners";
import SliderBar from "../slider/Slider";

const Header = () => {
  return (
    <header className="container-main">
      <section className="slider">
        <SliderBar />
      </section>

      <section className=" banner">
        <Banners />
      </section>
    </header>
  );
};

export default Header;
