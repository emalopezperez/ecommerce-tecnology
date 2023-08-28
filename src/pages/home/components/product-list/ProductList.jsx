import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductList({ title, productsList }) {
  return (
    <div className="w-full max-h-[700px] h-[100%] flex flex-col items-center justify-center ">
      <div className="mx-auto  max-w-[90%] w-full ">
        <div className="md:flex md:items-center md:justify-between pb-5">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 md:gap-x-42 lg:gap-x-28">
          {productsList.map(({ title, id, image }) => (
            <Link
              key={id}
              to={`/store/detail-product/${id}`}
              className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 ">
                <img
                  src={image}
                  alt={image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <span className="absolute inset-0" />
                {title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
