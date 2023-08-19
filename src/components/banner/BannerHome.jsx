import "./styles/bannerHome.css";

function bannerHome() {
  return (
    <div className="relative flex justify-center w-full overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 w-[100%] ">
        <div className="relative mx-auto max-w-[90%] sm:static ">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesnt care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-[100%]  ">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="object-cover object-center w-full h-full "
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block px-8 py-3 font-medium text-center text-white bg-[#44686f] border border-transparent rounded-md hover:bg-black-300">
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default bannerHome;
