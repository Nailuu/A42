const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 mt-12 w-full gap-8 items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#070C1B] font-bold text-5xl lg:text-6xl xl:text-8xl flex flex-col gap-2 leading-16">
          Affordable<br></br>
          And Reliable
          <span className="text-[#357AFF]"> IT Services</span>
        </h2>
        <div className="text-[#192958] w-5/6 md:mb-4 lg:mb-8 font-medium text-xs md:text-sm lg:text-lg mb-2">
          From
          <img
            className="mx-1 md:mx-1.25 lg:mx-2 w-4 md:w-5 lg:w-7 h-4 md:h-5 lg:h-7 inline text-[#070C1B]"
            alt="42 School Logo"
            src="/42logo.svg"
          />
          Luxembourg coding school, shaping tomorrow's
          <span> </span>
          <span className="underline">Software Engineers</span>
        </div>
        <a
          href="#contact"
          className="py-2 md:py-3 px-4 md:px-8 text-xs md:text-base bg-[#070C1B] text-white rounded-md md:rounded-lg w-48 md:w-56 flex justify-center cursor-pointer"
        >
          Discuss the project
        </a>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <img
          className="md:max-h-[300px] lg:max-h-[500px] object-contain"
          alt="Illustration of a women working on her computer"
          src="/hero-illustration.svg"
        />
      </div>
    </section>
  );
};

export default Hero;
