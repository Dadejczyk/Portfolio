import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <ContactForm />
    </div>
  );
}

export default App;
