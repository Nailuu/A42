interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${className ?? ""}`}>
      <div className="mx-8 md:mx-20 lg:mx-32 xl:mx-48 2xl:mx-64">
        {children}
      </div>
    </div>
  );
};

export default Container;
