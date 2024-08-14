interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return <footer className={`pt-0 ${className ?? ""}`}></footer>;
};

export default Footer;
