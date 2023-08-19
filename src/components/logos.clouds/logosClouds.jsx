function LogoClouds() {
  return (
    <div className="w-full h-[120px] hidden md:flex justify-center items-center ">
      <div className="mx-auto w-full max-w-[90%] ">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 pb-10">
          Sponsors
        </h3>
        <div className="mx-auto flex justify-between w-full ">
          <img
            className=" max-h-12 w-[158px] object-contain  "
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
          />
          <img
            className=" max-h-12 w-[158px]  object-contain "
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-[158px] object-contain "
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-[158px]  object-contain  "
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="  max-h-12 w-[158px] object-contain  "
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoClouds;
