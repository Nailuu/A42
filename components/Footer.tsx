interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`text-white py-8 ${className ?? ""}`}>
      <div className="grid lg:grid-cols-3 items-center gap-8">
        <div className="flex gap-4 items-center justify-center order-1">
          <img
            alt="42 Luxembourg Junior Entreprise Logo"
            src="/logo2.svg"
            className="h-14 w-14 lg:h-16 lg:w-16"
          />
          <div className="flex flex-col gap-1 w-fit">
            <h4 className="font-semibold text-sm md:text-base lg:text-xs xl:text-base">
              42 Luxembourg Junior Entreprise ASBL
            </h4>
            <p className="text-[#C1C8FF] text-sm lg:text-xs xl:text-sm">
              14, porte de France, L-4360, Esch-sur-Alzette, Luxembourg
            </p>
          </div>
        </div>
        <div className="w-full order-2 lg:order-3 flex flex-col md:flex-row lg:flex-col items-center gap-2 md:gap-6 lg:gap-2 md:justify-center lg:text-sm underline">
          <a className="cursor-pointer order-1" href="/legal-information">
            Legal information
          </a>
          {/* <a className="cursor-pointer order-2 md:order-3 lg:order-2" href="/terms-and-conditions">
            Terms and conditions
          </a> */}
          <a className="cursor-pointer order-2" href="/cookies">
            Cookies
          </a>
        </div>
        <div className="order-3 lg:order-2 flex flex-col lg:gap-2 items-center">
          <p>© All Rights Reserved</p>
          <p className="text-xs">
            Designed by{" "}
            <a
              className="underline cursor-pointer"
              href="https://www.linkedin.com/in/julian-bendinelli/"
            >
              Julian Bendinelli
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
