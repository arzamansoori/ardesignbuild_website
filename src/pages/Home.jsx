import ClientReviews from "../components/ClientReviews";
import DesignPhilosophy from "../components/DesignPhilosophy";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Projects from "../components/Projects";
import TopSection from "../components/TopSection";
import InstagramHighlight from "../components/InstagramHighlight";
import Footer from "../components/Footer";
import useDocumentHead from "../hooks/useDocumentHead";
import { BUSINESS_NAME } from "../utils/constants";

const Home = () => {
  useDocumentHead({
    title: `${BUSINESS_NAME} | Interior Design & Build Studio in Hyderabad`,
    description: `${BUSINESS_NAME} is a Hyderabad-based interior design and build studio crafting residential and commercial spaces. View our portfolio and get a free consultation.`,
    path: "/",
  });

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
