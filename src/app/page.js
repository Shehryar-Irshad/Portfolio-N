import About from "./Components/About";
import Nav from "./Components/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

export default function Home() {
  return (    
      <div className="home">
          <Nav/>
          <About/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Education/>
          <Contact/>
          <Footer/>
      </div>
  )
}
