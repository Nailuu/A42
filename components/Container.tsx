interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  internalClassName?: string;
}

const Container = ({ children, className, internalClassName }: ContainerProps) => {
  return (
    <div className={`${className ?? ""}`}>
      <div className={`mx-8 md:mx-20 lg:mx-32 xl:mx-48 2xl:mx-64 ${internalClassName ?? ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
