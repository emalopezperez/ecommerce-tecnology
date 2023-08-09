import "./styles/banners.css";

const Banners = () => {
  return (
    <section className="container-banners">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1466553359530-7387151ec321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVmbGV4JTIwY2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <div className="info-banner">
          <h3>Descuento 20% en comporas </h3>

          <p>
            <span>Ver mas</span>
          </p>
        </div>
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1499365094259-713ae26508c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVmbGV4JTIwY2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt=""
        />

        <div className="info-banner">
          <h3>Descuento 20% en comporas </h3>

          <p>
            <span>Ver mas</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banners;
