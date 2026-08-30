import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useDocumentHead from "../hooks/useDocumentHead";
import { BUSINESS_NAME } from "../utils/constants";

const NotFound = () => {
  useDocumentHead({
    title: `Page not found | ${BUSINESS_NAME}`,
    description: "The page you're looking for doesn't exist.",
    path: "/404",
    noindex: true,
  });

  return (
    <div>
      <Header />
      <div className="section-top px-8 pb-20 text-center">
        <h1 className="text-3xl font-bold text-cream mb-4">Page not found</h1>
        <p className="text-muted mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
