import { Container, Footer, Header, Hero } from "@/components";

const Home = () => {
  return (
    <main className="overflow-hidden bg-white">
      <Container>
          <Header />
          <Hero />
          <Footer />
      </Container>
    </main>
  );
};

export default Home;
