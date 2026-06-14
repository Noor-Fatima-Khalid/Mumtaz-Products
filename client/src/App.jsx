import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </>
  );
}