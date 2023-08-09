import { useState, useRef, useEffect } from "react";
import "./styles/sliderProducts.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  
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
    <div className="container-sliders-products">
      <div className="h-[30%]">
        <h3 className="text-xl text-black">Ultimos productos</h3>
      </div>
      <div className="flex flex-col items-center no-scrollbar ">
        <Slider className="w-full pb-4" {...settings}>
          {slides.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col items-center  ${
                index === 0 ? "pl-0" : ""
              }`}>
              <div className="cursor-pointer hover:none">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-w-[215px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlidersProducts;
