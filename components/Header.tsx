interface HeaderProps {
  className?: string;
  showHome?: boolean;
}

const Header = ({ className, showHome }: HeaderProps) => {
  return (
    <nav
      className={`flex justify-center md:justify-between items-center pt-8 md:pt-12 lg:pt-16 ${
        className ?? ""
      }`}
    >
      <div className="flex gap-2 xl:gap-4 items-center">
        <a href="/">
          <img
            className="w-8 md:w-10 lg:w-12 xl:w-16 h-8 md:h-10 lg:h-12 xl:h-16"
            alt="42 Luxembourg Junior Enterprise Logo"
            src="/logo.svg"
          />
        </a>
        <h1 className="font-bold text-xs md:text-sm lg:text-base xl:text-xl">
          42 Luxembourg Junior Enterprise
        </h1>
      </div>
      <div className="hidden md:flex items-center gap-2 md:gap-6 lg:gap-8 xl:gap-12">
        {showHome && (
          <a
            href="/"
            className="font-semibold xl:font-bold text-sm lg:text-base xl:text-lg hover:underline"
          >
            Home
          </a>
        )}
        <a
          href="/#services"
          className="font-semibold xl:font-bold text-sm lg:text-base xl:text-lg hover:underline"
        >
          Services
        </a>
        <a
          href="/#about"
          className="font-semibold xl:font-bold text-sm lg:text-base xl:text-lg hover:underline"
        >
          About us
        </a>
        <a
          href="/#contact"
          className="py-2 xl:py-3 px-4 font-semibold text-xs lg:text-base xl:text-lg bg-[#070C1B] hover:bg-[#061743] transition-all duration-150 text-white rounded-md w-28 lg:w-36 xl:w-44 flex justify-center cursor-pointer"
        >
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default Header;
