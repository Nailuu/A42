interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-8 md:mx-20 lg:mx-32 xl:mx-48 my-8 md:my-12 lg:my-16">
      {children}
    </div>
  );
};

export default Container;
