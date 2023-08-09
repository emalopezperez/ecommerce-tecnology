import "./styles/main.css"
import SideBar from "../sideBar/SideBar";
import SliderSidebar from "../../pages/home/components/slider.sidebar/SliderSidebar";

const Main = () => {
  return (
    <section className="container-main">
      <section className=" aside">
        <SideBar/>
      </section>

      <section className="bg-fuchsia-700 slider">
        <SliderSidebar/>
      </section>

      <section className="bg-red-400 banner">banner</section>
    </section>
  );
};

export default Main;
