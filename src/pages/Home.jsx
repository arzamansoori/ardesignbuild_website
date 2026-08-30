import ClientReviews from "../components/ClientReviews";
import DesignPhilosophy from "../components/DesignPhilosophy";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Projects from "../components/Projects";
import TopSection from "../components/TopSection";
import InstagramHighlight from "../components/InstagramHighlight";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <TopSection />
      <DesignPhilosophy />
      <Projects />
      <Portfolio />
      <InstagramHighlight />
      <ClientReviews />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home;
