import styles from "../styles/styles.module.css";

interface ServiceCardProps {
  className?: string;
  mainIcon: string;
  mainIconAlt: string;
  icon1?: string;
  icon1alt?: string;
  icon2?: string;
  icon2alt?: string;
  icon3?: string;
  icon3alt?: string;
  title: string;
  subtitle?: string;
}

const ServicesCard = ({
  className,
  mainIcon,
  mainIconAlt,
  icon1,
  icon1alt,
  icon2,
  icon2alt,
  icon3,
  icon3alt,
  title,
  subtitle,
}: ServiceCardProps) => {
  return (
    <div
      className={`${
        styles.services_card
      } h-[120px] lg:h-[150px] xl:h-[180px] w-full max-w-[350px] lg:max-w-[400px] 2xl:max-w-full min-w-[280px] px-6 py-4 xl:py-6 rounded-xl flex flex-col justify-between ${
        className ?? ""
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <img
          className={styles.services_card_text + " w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"}
          src={mainIcon}
          alt={mainIconAlt}
        />
        <div className="flex items-center gap-3 xl:gap-4">
          {icon1 && <img className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" src={icon1} alt={icon1alt} />}
          {icon2 && <img className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" src={icon2} alt={icon2alt} />}
          {icon3 && <img className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" src={icon3} alt={icon3alt} />}
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className={styles.services_card_text + " font-semibold text-sm lg:text-base xl:text-lg"}>
          {title}
        </h3>
        {subtitle && (
          <p className={styles.services_card_text + " text-[10px] lg:text-[12px] xl:text-[14px] font-medium"}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesCard;
