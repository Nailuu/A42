const Header = () => {
  return (
    <nav className="flex md:justify-between items-center">
      <div className="md:hidden">

      </div>
      <div className="flex gap-2 items-center">
        <img
          className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 text-[#070C1B]"
          alt="42 Luxembourg Junior Enterprise Logo"
          src="/logo.svg"
        />
        <h1 className="font-bold text-xs md:text-sm lg:text-xl">42 Luxembourg Junior Enterprise</h1>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="font-semibold text-sm">
          Services
        </a>
        <a href="#about" className="font-semibold text-sm">
          About us
        </a>
        <a
          href="#contact"
          className="py-2 px-4 font-semibold text-xs bg-[#070C1B] text-white rounded-md w-28 flex justify-center cursor-pointer"
        >
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default Header;
