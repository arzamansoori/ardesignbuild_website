import ClientReviews from "./components/ClientReviews";
import DesignPhilosophy from "./components/DesignPhilosophy";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import TopSection from "./components/TopSection";

function App() {

  return (
    <div>
      <Header />
      <TopSection />
      <DesignPhilosophy />
      <Portfolio />
      <ClientReviews />
      <ContactSection />
    </div>
  )
}

export default App;
