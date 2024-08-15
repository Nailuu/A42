import { Container, Footer, Header, Cookies } from "@/components";
import styles from "../../styles/styles.module.css";

const CookiesPage = () => {
  return (
    <>
      <Container>
        <Header showHome={true} />
        <Cookies />
      </Container>

      <Container className={styles.background_gradient_dark_blue}>
        <Footer />
      </Container>
    </>
  );
};

export default CookiesPage;
