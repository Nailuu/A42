interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-12 md:mx-24 lg:mx-48 my-12 md:my-14 lg:my-16">
      {children}
    </div>
  );
};

export default Container;
