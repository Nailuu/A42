interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section
      className={`grid items-center md:grid-cols-2 w-full gap-8 ${
        className ?? ""
      }`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-[#070C1B] font-bold text-5xl md:text-[46px] lg:text-6xl xl:text-[84px] 2xl:text-[112px] xl:mb-2 flex flex-col gap-1 leading-16">
          Affordable<br></br>
          And Reliable
          <span className="text-[#357AFF]"> IT Services</span>
        </h2>
        <div className="text-[#192958] w-full md:w-full mb-2 md:mb-4 lg:mb-5 xl:mb-10 2xl:mb-12 font-medium text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          From
          <img
            className="mx-1 md:mx-1.25 lg:mx-1.5 xl:mx-2 w-4 md:w-5 lg:w-7 xl:w-9 h-4 md:h-5 lg:h-7 xl:h-9 inline text-[#070C1B]"
            alt="42 School Logo"
            src="/42logo.svg"
          />
          Luxembourg coding school, shaping tomorrow's
          <span> </span>
          <span className="underline">Software Engineers</span>
        </div>
        <a
          href="#contact"
          className="flex justify-center cursor-pointer hover:underline bg-[#070C1B] text-white text-[11px] md:text-[12px] lg:text-base xl:text-lg 2xl:text-xl py-2 md:py-2.5 lg:py-3 2xl:py-4 px-4 md:px-5 lg:px-8 rounded-md 2xl:rounded-lg w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72"
        >
          Discuss the project
        </a>
      </div>
      <div className="hidden md:flex justify-end items-center">
        <img
          className="md:max-h-[300px] lg:max-h-[500px] xl:max-h-[650px] object-contain"
          alt="Illustration of a women working on her computer"
          src="/hero-illustration.svg"
        />
      </div>
    </section>
  );
};

export default Hero;
