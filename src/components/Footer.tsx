const Footer = () => {
  return (
    <footer className=" bg-[#00051B] text-white py-[32px] lg:py-[60px] xl:py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-[60px] xl:gap-[146px] lg:gap-[60px] p-4 lg:p-8 lg:container mx-auto">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-[6px]">
            <img
              src="/FooterLogo.svg"
              alt="Footer Logo"
              className="w-[57px] h-[56px]"
            />
            <h3 className="font-bold text-[25px]">DIGIKOEIN</h3>
          </div>

          <p className="text-[18px] font-normal mt-[17px]">
            DIGI KOEIN is embarking on a groundbreaking initiative to
            revolutionize the remittance and payment services sector by
            harnessing the power of blockchain technology.
          </p>
          <p className="text-[18px] font-normal mt-[77px]">
            DIGIKOEIN 2023 &copy;
          </p>
        </div>
        <div>
          <h4 className="text-[22px] font-normal mb-[12px] lg:mb-[40px]">
            Legal
          </h4>
          <ul>
            <li>Trademarks</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[22px] font-normal mb-[12px] lg:mb-[40px]">
            Sitemap
          </h4>
          <ul className="space-y-[16px] lg:space-y-[24px] w-full">
            <li>Home</li>
            <li>What is Digikoein?</li>
            <li>What is DLT for Fututre Bank</li>
            <li>Services</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[22px] font-normal mb-[12px] lg:mb-[40px]">
            About
          </h4>
          <ul className="space-y-[16px] lg:space-y-[24px]">
            <li>Contact</li>
            <li>Blog</li>
            <li>Litepaper</li>
            <li>Community</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
