import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ClientExperience from "./pages/ClientExperience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Milestones from "./pages/Milestones";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client-experience" element={<ClientExperience />} />
        <Route path="/milestones" element={<Milestones />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
