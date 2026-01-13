import ClientReviews from "./components/ClientReviews";
import DesignPhilosophy from "./components/DesignPhilosophy";
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
    </div>
  )
}

export default App;
