import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { LanguageProvider } from "./i18n";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
