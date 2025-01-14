import { useEffect } from "react";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import { useNavigate } from "react-router-dom";
import CookieConsent from "react-cookie-consent"; // Importujemy bibliotekę

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <ContactForm />
      <Footer />

      {/* Baner cookies */}
      <CookieConsent
        location="bottom"
        buttonText="Zgadzam się"
        cookieName="myWebsiteCookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "13px",
          backgroundColor: "#f1d600",
          borderRadius: "5px",
          padding: "10px 20px",
        }}
        expires={150}
      >
        Ta strona wykorzystuje pliki cookie w celu poprawy jakości użytkowania.
      </CookieConsent>
    </div>
  );
}

export default App;
