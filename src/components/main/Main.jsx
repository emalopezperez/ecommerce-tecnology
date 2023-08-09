import "./styles/main.css";
import SideBar from "../sideBar/SideBar";
import SliderSidebar from "../../pages/home/components/slider.sidebar/SliderSidebar";
import Banners from "../../pages/home/components/banners/Banners";

const Main = () => {
  return (
    <section className="container-main">
      <section className=" aside">
        <SideBar />
      </section>

      <section className="slider">
        <SliderSidebar />
      </section>

      <section className=" banner">
        <Banners />
      </section>
    </section>
  );
};

export default Main;
