import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App;
