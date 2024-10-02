const AboutSection = () => {
  return (
    <section className="relative">
      <img
        src="src/assets/Rectangle 20.svg"
        alt="bg-image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-y-0 right-0 flex flex-col justify-start items-start lg:pr-16 xl:pr-40 pr-6 lg:w-[736px] w-full lg:pt-[30px] xl:pt-[80px] 2xl:pt-[166px] p-4">
        <h2 className="text-[15px] md:text-[30px]  xl:text-[60px] text-[#FFFFFF] font-bold mb-4 lg:mb-[17.05px]">
          What is Digikoein?
        </h2>
        <p className="text-[#CFCFCF] text-[8px] md:text-[14px] 2xl:text-[18px] ">
          DIGI KOEIN is created and developed by a group of financial experts
          under the company of{" "}
          <span className="text-[#FCD64E]">Green Shark Limited</span> to prompt
          a technological innovation and to positively alter the financial
          industry practice and the life of people. The ways to use “Money” are
          below observed and divided into three categories: 1. Fund Transfer; 2.
          Payment and 3. Currency Exchanges.
        </p>
        <button className="bg-gradient-to-r text-[14px] md:text-[20px] lg:hidden text-white  from-[#FCD64E] to-[#ED8F07] rounded-[9px] mt-2  px-[4px] md:px-[12px] md:py-[10px] py-[2px] ">
          Learn More
        </button>
        <br />
        <p className="text-[#CFCFCF] text-[8px] lg:text-[14px] 2xl:text-[18px]  hidden lg:block">
          However, the industry practice currently adopted, to some extent,
          hinders a full-fledged technological and economic growth in terms of
          the usage of Money. The global and independent platform created
          through DIGI KOEIN Blockchain/Distributed Ledger Technology shall get
          the divided ways of “Money” usage bundled and integrated to remove the
          current intermediaries, and to offer the alternative solutions.
        </p>
        <br />
        <p className="text-[#CFCFCF] text-[8px] lg:text-[14px] 2xl:text-[18px]   hidden lg:block">
          The technology shall ultimately expand its horizon to be used in a
          variety of financial services including credits and loans, trade
          finance, and others. At this stage, it is certain that the market
          recognition and brand name of DIGI KOEIN will be explosively
          heightened.
        </p>
        <button className="hidden lg:block bg-gradient-to-r text-white lg:font-medium from-[#FCD64E] to-[#ED8F07] rounded-[9px] mt-0 lg:mt-[10px] xl:mt-[20px] px-[4px] lg:px-[30px] py-[4px] lg:py-[10px]">
          Learn More
        </button>
        <img
          src="src/assets/Ellipse 41.svg"
          alt="circle"
          className="absolute bottom-0 right-0"
        />
        <img
          src="src/assets/Ellipse 40.svg"
          alt="circle"
          className="absolute top-0 right-0"
        />
      </div>
    </section>
  );
};

export default AboutSection;
