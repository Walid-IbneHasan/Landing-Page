const OfferingsSection = () => {
  return (
    <section className="relative p-4 lg:p-8 xl:p-16 text-black bg-gradient-to-r from-[#051A32] via-[#150B20] to-[#041E22] bg-no-repeat bg-[url('/Ellipse 6.svg'),url('/Ellipse 7.svg'),url('/Ellipse 8.svg')] bg-[left,center,right] bg-[auto,auto,auto] h-auto xl:h-[713px]">
      <h2 className=" text-[30px] lg:text-[40px] font-semibold text-center mb-10 text-white">
        What Do We Offer
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full container mx-auto">
        <div className="lg:col-span-2 rounded-[20px] p-8 bg-gradient-to-r from-[#433598] to-[#305A98]">
          <img
            src="/fund 1.svg"
            alt="icon"
            className="w-[47px] h-[50px] mb-[20px]"
          />
          <h3 className="mb-[20px] font-semibold text-white text-[20px] lg:text-[25px]">
            Fund Transfer
          </h3>
          <p className="font-normal text-[14px] lg:text-[18px] text-white">
            Fund transfer, also known as remittance, involves moving funds from
            one place to another. Traditionally, banks have facilitated this
            process through domestic and international banking networks like
            SWIFT.{" "}
          </p>{" "}
          <br />
          <p className="font-normal text-[14px] lg:text-[18px] text-white">
            {" "}
            In recent years, remittance companies have emerged, offering
            services under new regulations and using technology such as mobile
            devices. However, these companies face obstacles as they rely on the
            traditional banking infrastructure, which restricts their ability to
            adopt further technological advancements.
          </p>
        </div>
        <div className="px-[24px] py-[32px] relative bg-[#FFFFFF] bg-opacity-5 backdrop-blur-md rounded-[20px] shadow-lg">
          <img
            src="/operation 1.svg"
            alt="icon"
            className="w-[30px] h-[30px] lg:w-[47px] lg:h-[50px] mb-[20px]"
          />
          <h3 className="text-[20px] lg:text-[30px] text-white font-bold">
            Payment System
          </h3>
          <img
            src="/Arrow Down.svg"
            alt="Arrow Down"
            className="absolute bottom-10 right-10 bg-[rgba(200, 222, 255, 0.22)] w-[15px] h-[15px] "
          />
        </div>

        <div className="px-[24px] py-[32px] relative bg-[#FFFFFF] bg-opacity-5 backdrop-blur-md rounded-[20px] shadow-lg">
          <img
            src="/forex 1.svg"
            alt="icon"
            className="w-[30px] h-[30px] lg:w-[47px] lg:h-[50px] mb-[20px]"
          />
          <h3 className="text-[20px] lg:text-[30px] text-white font-bold">
            Currency Exchange
          </h3>
          <img
            src="/Arrow Down.svg"
            alt="Arrow Down"
            className="absolute bottom-10 right-10 bg-[rgba(200, 222, 255, 0.22)] w-[15px] h-[15px] "
          />
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
