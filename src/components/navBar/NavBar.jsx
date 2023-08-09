import "./styles/navBar.css";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <header className="container-nav">
      <nav className="">
        <ul>
          <li>
            <NavLink to="/">
              <h1 className="text-2xl">PhotoLand</h1>
            </NavLink>
          </li>
        </ul>
        <input
          type="text"
          className="custom-input"
          placeholder="Ingrese su texto aquí"
        />

        <section className="">
          <li>Cart</li>
          <li>My oredenes</li>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
