import ServicesCard from "./ServicesCard";

interface ServicesProps {
  className?: string;
}

const Services = ({ className }: ServicesProps) => {
  return (
    <section className={`pt-2 flex flex-col gap-4 ${className ?? ""}`}>
      <h2 className="text-white text-center font-bold text-2xl mt-4" id="services">
        Services
      </h2>
      <div className="grid justify-center gap-4 px-4 py-4">
        <ServicesCard
          mainIcon="brush.svg"
          mainIconAlt="Painting brush"
          title="Design and development of showcase websites (CRM)"
          icon1="wordpress.svg"
          icon1alt="Wordpress logo"
          icon2="joomla.svg"
          icon2alt="Joomla logo"
          icon3="shopify.svg"
          icon3alt="Shopify logo"
        />
        <ServicesCard
          mainIcon="tools.svg"
          mainIconAlt="Repair tools"
          title="Maintenance and technical support for CRM websites"
          icon1="wordpress.svg"
          icon1alt="Wordpress logo"
          icon2="joomla.svg"
          icon2alt="Joomla logo"
          icon3="shopify.svg"
          icon3alt="Shopify logo"
        />
        <ServicesCard
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
          mainIcon="robotic-arm.svg"
          mainIconAlt="Robotic arm"
          title="Automation of process and workflows using AI"
        />
        <ServicesCard
          mainIcon="json.svg"
          mainIconAlt="JSON data object"
          title="Development and integration of APIs"
        />
        <ServicesCard
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
