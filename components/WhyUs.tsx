interface WhyUsProps {
  className?: string;
}

const WhyUs = ({ className }: WhyUsProps) => {
  return (
    <section
      className={`text-[#070C1B] flex flex-col items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24 py-12 md:py-16 lg:py-24 xl:py-36 ${
        className ?? ""
      }`}
    >
      <h2
        id="about"
        className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Why us?
      </h2>
      <div className="w-full flex flex-col gap-4 xl:gap-8 md:text-[17px] md:font-medium xl:font-semibold lg:text-lg xl:text-xl">
        <p>
          By focusing on practical experience and adaptability, students are
          well-prepared to meet the demands of your project.
        </p>
        <p>
          Each of the 42 students brought their own unique experiences in areas
          such as marketing, communication, UX/UI, as well as skills in various
          technologies and programming languages.
        </p>
        <p>
          This diversity is a key strength, making every student a potential
          perfect fit for your project.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
