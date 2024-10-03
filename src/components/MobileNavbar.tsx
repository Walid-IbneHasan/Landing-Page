import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" flex justify-between p-4 w-full items-center">
      <div className="flex gap-1 items-center">
        <img src="/logo.svg" alt="" />
        <p className="text-md text-white">DIGIKOEIN</p>
      </div>
      <div>
        <button onClick={toggle}>
          {isOpen ? <IoMdClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>

        {isOpen && (
          <nav className="absolute h-screen right-0  bg-black opacity-90 w-full flex items-center justify-center">
            <ul className="flex flex-col gap-2 text-2xl items-center justify-center text-white">
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
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
