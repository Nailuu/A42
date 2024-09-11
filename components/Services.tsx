import ServicesCard from "./ServicesCard";

interface ServicesProps {
  className?: string;
}

const Services = ({ className }: ServicesProps) => {
  return (
    <section
      className={`pt-2 flex flex-col items-center gap-4 md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-24 pb-6 md:pb-10 lg:pb-0 ${
        className ?? ""
      }`}
    >
      <h2
        className="text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-4 md:mt-6 lg:mt-0"
        id="services"
      >
        Services
      </h2>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 max-w-[1350px] justify-center items-center gap-4 lg:gap-6 px-4 py-4">
        <ServicesCard
          className="md:justify-self-end hover:-skew-y-1"
          mainIcon="brush.svg"
          mainIconAlt="Painting brush"
          title="Design and development of showcase websites (CMS)"
          icon1="wordpress.svg"
          icon1alt="Wordpress logo"
          icon2="joomla.svg"
          icon2alt="Joomla logo"
          icon3="shopify.svg"
          icon3alt="Shopify logo"
        />
        <ServicesCard
          className="md:justify-self-start hover:skew-y-1"
          mainIcon="tools.svg"
          mainIconAlt="Repair tools"
          title="Maintenance and technical support for CMS websites"
          icon1="wordpress.svg"
          icon1alt="Wordpress logo"
          icon2="joomla.svg"
          icon2alt="Joomla logo"
          icon3="shopify.svg"
          icon3alt="Shopify logo"
        />
        <ServicesCard
          className="md:justify-self-end hover:-skew-y-1"
          mainIcon="terminal.svg"
          mainIconAlt="Computer terminal"
          title="Development of web applications"
          icon1="nodejs.svg"
          icon1alt="NodeJS logo"
          icon2="react.svg"
          icon2alt="React logo"
          icon3="angular.svg"
          icon3alt="Angular logo"
        />
        <ServicesCard
          className="md:justify-self-start hover:skew-y-1"
          mainIcon="robotic-arm.svg"
          mainIconAlt="Robotic arm"
          title="Automation of process and workflows using AI"
        />
        <ServicesCard
          className="md:justify-self-end hover:-skew-y-1"
          mainIcon="json.svg"
          mainIconAlt="JSON data object"
          title="Development and integration of APIs"
        />
        <ServicesCard
          className="md:justify-self-start hover:skew-y-1"
          mainIcon="unknown.svg"
          mainIconAlt="Unknown document"
          title="Contact us"
          subtitle="For any other projects, don’t hesitate to contact us. We will make sure to find the perfect profile for you."
          icon1="python.svg"
          icon1alt="Python logo"
          icon2="java.svg"
          icon2alt="Java logo"
          icon3="cpp.svg"
          icon3alt="C++ logo"
        />
      </div>
    </section>
  );
};

export default Services;
