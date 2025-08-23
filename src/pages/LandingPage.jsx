import React,{useEffect,useState} from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Inquiry from "../components/Inquiry"
import Contact from "../components/Contact" 
export default function LandingPage() {
    const [showInquiry, setShowInquiry] = useState(false);

    // Show inquiry form modal only on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("isInquiry");
    if (!hasVisited) {
      setShowInquiry(true);
      localStorage.setItem("isInquiry", "true");
    }
  }, []);
  
  return (
    <>
      <Hero id="hero" />
      <AboutMe id="about" />
      <Experience id="portfolio" />
      <Services id="services"/>
      <Skills  id="skills"/>
      <Education id="education"/>
      <Projects id="projects"/>
      <Contact id="contact"/>

      {/*Inquiry Modal Popup */}
      {showInquiry && (
        <Inquiry
          isOpen={showInquiry}
          onClose={() => setShowInquiry(false)}
        />
      )}
    </>
  );
}