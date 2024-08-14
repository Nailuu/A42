interface WhoAreWeProps {
  className?: string;
}

const WhoAreWe = ({ className }: WhoAreWeProps) => {
  return (
    <section className={`text-[#070C1B] flex flex-col items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24 py-12 md:py-16 lg:py-24 xl:py-36 ${className ?? ""}`}>
      <h2 id="about" className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Who are we?</h2>
      <div className="w-full flex flex-col gap-4 xl:gap-8 md:text-[17px] md:font-medium xl:font-semibold lg:text-lg xl:text-xl">
        <p>
          We are a non lucrative association (ASBL) managed by 42 students and
          based in Belval, Luxembourg.
        </p>
        <p>
          Our aim is to offer 42 students IT missions of all kind to help them
          gain experience while working on real project and technologies which
          are used everyday in the Grand Duchy of Luxembourg.{" "}
        </p>
      </div>
    </section>
  );
};

export default WhoAreWe;
