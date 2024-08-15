interface WhatIs42Props {
  className?: string;
}

const WhatIs42 = ({ className }: WhatIs42Props) => {
  return (
    <section
      className={`text-white flex flex-col items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24 py-12 md:py-16 lg:py-24 xl:py-36 ${
        className ?? ""
      }`}
    >
      <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        What is{" "}
        <a href="https://42luxembourg.lu/">
          <img
            src="42logo2.svg"
            alt="42 school logo"
            className="text-white inline h-10 md:h-14 lg:h-16 xl:h-20 w-10 md:w-14 lg:w-16 xl:w-20 transition-all delay-200 duration-200 hover:scale-[1.1] hover:skew-y-3 ease-in-out"
          />
        </a>{" "}
        ?
      </h2>
      <div className="w-full flex flex-col gap-4 xl:gap-8 md:text-[17px] md:font-medium xl:font-semibold lg:text-lg xl:text-xl">
        <p>
          42 is a coding school that emphasizes peer-to-peer learning, hands-on
          projects, and self-directed education.
        </p>
        <p>
          The school's philosophy fosters critical thinking, problem-solving,
          and collaboration.
        </p>
        <p>To know more about the school click <a href="https://42luxembourg.lu/" className="underline">here</a>.</p>
      </div>
    </section>
  );
};

export default WhatIs42;
