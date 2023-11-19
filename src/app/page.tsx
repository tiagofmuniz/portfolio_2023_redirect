import Home from '../components/SectionHome/Home';
import About from '../components/SectionSobre/About';
import TechList from '../components/SectionKnowledge/Knowledge';
import Projects from '../components/SectionProjects/Projects';
import Contact from '../components/SectionContacts/Contact';

export default function Main() {
  return (
    <main>
      <Home/>
      <About/>
      <TechList/>
      <Projects/>
      <Contact/>
    </main>
  )
}
