import "./styles/layoutContainer.css";

const LayoutContainer = ({ children }) => {
  return (
    <main className="container-layout">
      {children}
    </main>
  );
};

export default LayoutContainer;
