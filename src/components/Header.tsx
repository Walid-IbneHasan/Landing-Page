const Header = () => {
  return (
    <header className=" p-4 bg-black bg-opacity-5  shadow-md text-white  w-full">
      <div className="w-5/6 mx-auto flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center pr-2 ">
            <img src="src/assets/logo.svg" alt="Digi Koein" />
            <p className="text-white font-bold border-r border-r-[#545454] pr-[29px] py-[9px] pl-[6px] ">
              DIGI KOEIN
            </p>
          </div>
          <nav>
            <ul className="flex space-x-[40px] text-[#AFAFAF]">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">What is Digikoein?</a>
              </li>
              <li>
                <a href="#">References</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <select
            title="Language Selector"
            className="bg-white cursor-pointer outline-none appearance-none text-white bg-opacity-30 w-[126px] h-[48px]  rounded-lg"
          >
            <option
              className="bg-[#635F6E] text-white  w-[130px] h-[48px] text-center rounded-lg"
              value="en"
            >
              English
            </option>
            <option
              className="bg-[#635F6E] text-white  w-[130px] h-[48px] text-center rounded-lg"
              value="es"
            >
              Spanish
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
