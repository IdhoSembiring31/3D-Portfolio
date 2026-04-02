import Hero from "./Sections/Hero"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import ShowcaseSection from "./Components/ShowcaseSection"
import Navbar from "./Components/Navbar"
import LogoSection from "./Sections/LogoSection"
import FeatureCards from "./Sections/FeatureCards"
import ExperienceSection from "./Sections/ExperienceSection"
import TechStack from "./Sections/TechStack"
import Testimonial from "./Sections/Testimonial"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"
gsap.registerEffect(ScrollTrigger)
function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App