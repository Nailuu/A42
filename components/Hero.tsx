const Hero = () => {
  return (
    <section className="mt-12 w-full flex gap-2 justify-between items-center">
      <div className="flex flex-col gap-2 md:w-1/2">
        <h2 className="text-[#070C1B] font-bold text-5xl flex flex-col gap-2 leading-16">
          Affordable<br></br>
          And Reliable
          <span className="text-[#357AFF]"> IT Services</span>
        </h2>
        <div className="text-[#192958] font-medium text-xs mb-2 w-3/4">
          From
          <img
            className="mx-1 w-4 h-4 inline text-[#070C1B]"
            alt="42 School Logo"
            src="/42logo.svg"
          />
          Luxembourg coding school, shaping tomorrow's
          <span className="underline"> Software Engineers</span>
        </div>
        <a
          href="#contact"
          className="py-2 px-4 text-xs bg-[#070C1B] text-white rounded-md w-48 flex justify-center cursor-pointer"
        >
          Discuss the project
        </a>
      </div>
      <div className="hidden md:block w-1/2 justify-center items-center">
        <img
          className="w-full h-80 object-contain"
          alt="Illustration of a women working on her computer"
          src="/hero-illustration.svg"
        />
      </div>
    </section>
  );
};

export default Hero;
