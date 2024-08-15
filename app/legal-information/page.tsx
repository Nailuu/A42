import { Container, Footer, Header, LegalInformation } from "@/components";
import styles from "../../styles/styles.module.css";

const LegalInformationPage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Container>
        <Header showHome={true} />
        <LegalInformation />
      </Container>

      <Container className={styles.background_gradient_dark_blue}>
        <Footer />
      </Container>
    </main>
  );
};

export default LegalInformationPage;
