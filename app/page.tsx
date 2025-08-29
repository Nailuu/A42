import {
  Container,
  Footer,
  Header,
  Hero,
  Services,
  WhoAreWe,
  WhatIs42,
  WhyUs,
  ContactForm,
} from "@/components";
import styles from "../styles/styles.module.css";
import Calendly from "@/components/Calendly";

const Home = () => {
  return (
    <main className="overflow-hidden bg-white">
      <div className="lg:min-h-screen lg:overflow-y-scroll scroll-smooth lg:snap-y lg:snap-mandatory">
        <Container className="snap-start  lg:min-h-screen lg:flex  lg:justify-center"> {/*"snap-start lg:min-h-screen lg:flex">*/}
          <Header />
          <Hero className="mt-8 lg:mt-8 mb-8 md:mb-12 lg:mb-24 lg:h-3/4" />
        </Container>

        <Container
          className={
            "snap-start lg:min-h-screen lg:flex lg:items-center lg:justify-center mt-12 lg:mt-0 " +
            styles.background_gradient_dark_blue
          }
        >
          <Services className="lg:my-8" />
        </Container>

        {/* <Container className="snap-start">
          <WhoAreWe />
        </Container> */}

        {/* <Container
          className={"snap-start " + styles.background_gradient_dark_blue}
        >
          <WhatIs42 />
        </Container> */}

        {/* <Container className="snap-start">
          <WhyUs />
        </Container> */}

        <Container className="snap-start mb-4 md:mb-8 lg:mb-12 lg:min-h-screen lg:flex lg:items-center lg:justify-center">
          <ContactForm />
        </Container>

        {/* <Container className="snap-start mb-4 md:mb-8 lg:mb-12 w-full lg:min-h-screen lg:flex lg:items-center lg:justify-center" internalClassName="w-full max-w-screen h-screen">
          <Calendly/>
        </Container> */}

        <Container
          className={"snap-start " + styles.background_gradient_dark_blue}
        >
          <Footer />
        </Container>
      </div>
    </main>
  );
};

export default Home;
