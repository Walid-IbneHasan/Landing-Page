import Header from "./Header";
import ScrollButton from "./ScrollButton";

const HeroSection = () => {
  return (
    <section className=" bg-gradient-to-r from-[#33112E] via-[#463727] to-[#110E32] text-white  h-screen relative">
      <div className="w-full hidden lg:block">
        <Header />
      </div>
      <div className="flex flex-col h-full gap-4 items-center justify-center">
        <p className="  text-[18px] text-[#7C7C7C] font-normal">
          Unified Product, Simplified Transection
        </p>
        <h1 className="lg:text-[70px] text-[30px]  font-black text-center  mb-4">
          Free Your Money with Digital <br /> Blockchain / DHL Bank
        </h1>
        <p className="lg:text-[18px] text-sm font-normal leading-[26px] text-center ">
          DIGI-KOEIN is a cryptocurrency, It’s developed by Green Sked, led by
          financial experts, to transform <br /> the financial industry and
          enhance people's lives using Blockchain technology.
        </p>
        <div className="flex flex-col items-center justify-center">
          <button className="mb-[98px] bg-gradient-to-r from-[#FCD64E] to-[#ED8F07] text-white w-[158px] h-[56px] rounded-[9px]">
            Learn More
          </button>
          <ScrollButton />
        </div>
      </div>
      <div>
        <img
          src="src/assets/Polygon 6.svg"
          alt="Hero Section"
          className="absolute top-2 left-4 lg:top-[273px] lg:left-[143px]"
        />
        <img
          src="src/assets/Ellipse 62.svg"
          alt="Circle"
          className="absolute top-6 left-5 lg:top-[272px] lg:left-[209px]"
        />
        <img
          src="src/assets/Polygon 4.svg"
          alt="Circle"
          className="absolute bottom-10 left-10  lg:top-[648px] lg:left-[69px]"
        />
        <img
          src="src/assets/Ellipse 66.svg"
          alt="Circle"
          className="absolute bottom-24 right-20 lg:top-[573px] lg:left-[376px]"
        />
        <img
          src="src/assets/Ellipse 63.svg"
          alt="Circle"
          className="absolute bottom-40 right-5  lg:bottom-2 lg:left-[297px] xl:top-[650px] 2xl:top-[775px] xl:left-[297px]"
        />
        <img
          src="src/assets/Polygon 5.svg"
          alt="Circle"
          className="absolute top-[881px] left-[1232px] xl:top-[600px] 2xl:top-[881px]"
        />
        <img
          src="src/assets/Ellipse 64.svg"
          alt="Circle"
          className="lg:absolute lg:top-[572px] lg:left-[1598px] hidden lg:block"
        />
        <img
          src="src/assets/Ellipse 60.svg"
          alt="Circle"
          className="lg:absolute lg:top-[594px] lg:left-[1710px] hidden lg:block"
        />
        <img
          src="src/assets/Polygon 3.svg"
          alt="Circle"
          className="lg:absolute lg:top-[176px] lg:left-[1391px] hidden lg:block"
        />
      </div>
    </section>
  );
};

export default HeroSection;
