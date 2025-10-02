import Image from "next/image";

const Footer = () => {
  return (
    <footer className="lg:border-t border-gray-200 bg-footer-bg py-6 mt-12 mb-12 lg:mb-0">
      <div className="mx-auto px-6 flex justify-between items-center text-sm md:text-lg lg:text-2xl text-white font-bold">
        <div className="flex gap-2 items-center">
          <Image src={"/images/white-logo.webp"} alt={"Krea Logo"} width={30} height={30} />
          <p>Krea AI</p>
        </div>
        <div className="flex gap-1 items-center">
          <p>Curated By</p>
          <Image src={"/images/mobbin.png"} alt={"Mobbin logo"} width={90} height={30} className="md:w-40 lg:w-50"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
