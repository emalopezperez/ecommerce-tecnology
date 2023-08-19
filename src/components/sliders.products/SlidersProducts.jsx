import "./styles/sliderProducts.css";
import Slider from "react-slick";
import CardProducts from "../cards.products/CardProducts";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1600,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SlidersProducts = () => {
  const slides = [
    {
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$19.99",
      imageUrl:
        "https://images.unsplash.com/photo-1517168749138-3ba32163b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcmFzJTIwcmVmbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$19.99",
      imageUrl:
        "https://images.unsplash.com/photo-1517168749138-3ba32163b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcmFzJTIwcmVmbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$19.99",
      imageUrl:
        "https://images.unsplash.com/photo-1517168749138-3ba32163b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcmFzJTIwcmVmbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$19.99",
      imageUrl:
        "https://images.unsplash.com/photo-1517168749138-3ba32163b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcmFzJTIwcmVmbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$19.99",
      imageUrl:
        "https://images.unsplash.com/photo-1517168749138-3ba32163b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcmFzJTIwcmVmbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$19.99",
      imageUrl:
        "https://images.unsplash.com/photo-1517168749138-3ba32163b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcmFzJTIwcmVmbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: "$19.99",
      imageUrl:
        "https://images.unsplash.com/photo-1517168749138-3ba32163b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcmFzJTIwcmVmbGV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center h-[600px] ">
      <div className="max-w-[90%] mx-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-12">
          Productos más vendidos
        </h3>
        <div className="flex justify-center w-full">
          <Slider className="md:max-w-[100%] max-w-[78%] pb-12" {...settings}>
            {slides.map((product, index) => (
              <CardProducts key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SlidersProducts;
