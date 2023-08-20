import "./styles/bannerHome.css";
import Slider from "../../pages/home/components/slider/Slider";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1520013225692-fff4010c0ae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
];

const otro = [
  {
    url: "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
];

const tercero = [
  {
    url: "https://images.unsplash.com/photo-1520512248724-ded0dab31101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1549836938-d278c5d46d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1517232757230-5daf906e5fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
];

const cuarto = [
  {
    url: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1620064881980-1023851173f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1569518275055-590ae5fce624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
];

const quinto = [
  {
    url: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1503342296413-28a6ec3768b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Hero image",
  },
];

const sexto = [
  {
    url: "https://images.unsplash.com/photo-1533659828870-95ee305cee3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1599330293364-622fa6bfcf3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Hero image",
  },
];

const septimo = [
  {
    url: "https://images.unsplash.com/photo-1579493934830-eab45746b51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1593314731059-d6eb89748e65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    alt: "Hero image",
  },
  {
    url: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    alt: "Hero image",
  },
];

function bannerHome() {
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length,
      randomIndex,
      tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      tempValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = tempValue;
    }

    return shuffledArray;
  };

  return (
    <div className="relative flex justify-center w-full overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 w-[100%] ">
        <div className="relative mx-auto max-w-[90%] sm:static ">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-orange-600">Summer </span>
              styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesnt care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-[100%]  ">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                        <Slider slides={shuffleArray(cuarto)} time={5000} />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <Slider slides={shuffleArray(otro)} time={5500} />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <Slider slides={shuffleArray(quinto)} time={6800} />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <Slider slides={shuffleArray(slides)} time={7000} />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <Slider slides={shuffleArray(septimo)} time={7500} />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <Slider slides={shuffleArray(tercero)} time={8000} />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <Slider slides={shuffleArray(sexto)} time={8500} />
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
