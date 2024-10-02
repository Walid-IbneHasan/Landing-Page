const featuresData = [
  {
    title: "Trade Finance",
    description:
      "We offer green financing to help sellers, buyers, and financial institutions facilitate trade as well as create an atmosphere for non-conventional players",
    imageUrl: "/chart-histogram 1.svg",
  },
  {
    title: "Cross-Border Payments",
    description:
      "We make the transaction easier between the payer and payee from different countries by ensuring low cost, high speed, unlimited access and sufficient transparency.",
    imageUrl: "/chart-histogram 2.svg",
  },
  {
    title: "Digital Identity",
    description:
      "We can help you build your online presence, and our digital infrastructure will allow financial institutions to validate identities without depending on physical documentation.",
    imageUrl: "/chart-histogram 3.svg",
  },
];

const FeaturesSection = () => {
  return (
    <section className=" bg-gradient-to-r from-[#44341E] via-[#0B0D1B] to-[#3C2D1C] p-4 xl:p-16 text-white">
      <div className="flex flex-col lg:flex-row xl:justify-evenly my-[32px] lg:my-[100px]">
        <div className="lg:flex-1 ">
          <h2 className="  xl:text-[48px] lg:text-[40px] text-[30px]  text font-bold mb-8">
            What We Do With <br /> Blockchain DLT / Bank
          </h2>
          <p className="font-normal text-[18px] w-1/2">
            Join a first-growing community of developers and innovators
            connected all over the world, building the new era of the internet.
          </p>
          <div className="lg:flex gap-[23px] mt-[19px] hidden">
            <img
              src="/Arrow Left.svg"
              alt="arrow-left"
              className="bg-[#FFFFFF] bg-opacity-[35%] p-[13px] rounded-[14px] hover:bg-opacity-60 hover:cursor-pointer"
            />
            <img
              src="/Arrow Right.svg"
              alt="arrow-left"
              className="bg-[#FFFFFF] bg-opacity-[35%] p-[13px] rounded-[14px] hover:bg-opacity-60 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="lg:flex-1 flex lg:flex-row flex-col space-y-[24px] lg:space-y-0 lg:space-x-[24px]  justify-center mt-8 lg:mt-0">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className=" p-[20px] lg:p-[14px] xl:p-[20px] w-full rounded-[13px] bg-[#3D314F] bg-opacity-[38%] flex flex-col items-start"
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-[50px] h-[50px] p-[14px] mb-[29px] lg:mb-[15px] xl:mb[29px] bg-[#525476] bg-opacity-[21%] rounded-[10px]"
              />
              <h3 className="font-bold text-[20px] lg:text-[16px] xl:text-[20px] mb-[12px]">
                {feature.title}
              </h3>
              <p className="font-normal text-[16px] lg:text-[14px] xl:text-[16px] text-[#CFCFCF]">
                {" "}
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
