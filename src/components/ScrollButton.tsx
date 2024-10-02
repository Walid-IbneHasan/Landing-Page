import { useState } from "react";

const ScrollButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleScroll = () => {
    const nextSection = document.querySelector(".features-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
    setIsClicked(true);

    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <>
      <div className="relative w-[42px] h-[65px] rounded-[25px] border-white border">
        <div
          onClick={handleScroll}
          className={`absolute w-[16px] h-[16px] bg-white left-1/2 transform -translate-x-1/2 top-1 rounded-full transition-transform duration-100 ${
            isClicked ? "translate-y-[40px]" : ""
          }`}
        ></div>
      </div>
      <button onClick={handleScroll} className="scroll-btn mt-6 text-white">
        Scroll Down
      </button>
      <img src="src/assets/Arrow 1.svg" alt="Scroll Down" className="mt-6" />
    </>
  );
};

export default ScrollButton;
