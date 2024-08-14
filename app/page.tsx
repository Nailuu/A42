import { Container, Footer, Header, Hero, Services } from "@/components";
import styles from "../styles/styles.module.css";

const Home = () => {
  return (
    <main className="overflow-hidden bg-white">
      <Container>
        <Header className="mt-8 md:mt-12 lg:mt-16" />
        <Hero className="mt-8 lg:mt-14 xl:mt-24 mb-8 md:mb-12 lg:mb-16 xl:mb-24" />
      </Container>

      <Container className={styles.background_gradient_dark_blue + " mt-12"}>
        <Services />
      </Container>
    </main>
  );
};

export default Home;
