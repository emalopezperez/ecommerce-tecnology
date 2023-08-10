import "./styles/sideBar.css";

const SideBar = () => {
  return (
    <aside className="container-sidebar">
      <header className="">
        <h2 className="title-category">Categorias</h2>
      </header>

      <ul className="container-categorys ">
        <li>Mirroless</li>
        <li>Reflex</li>
        <li>Compactas</li>
        <li>Lentes</li>
        <li>Accesorios</li>
      </ul>
    </aside>
  );
};

export default SideBar;
