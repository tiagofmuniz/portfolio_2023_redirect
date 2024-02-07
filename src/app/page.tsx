<<<<<<< HEAD
'use client';

import styles from './page.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from 'components/page_containers/Home/Home';
import About from 'components/page_containers/About/About';
import Skills from 'components/page_containers/Skills/Skills';
import Projects from 'components/page_containers/Projects/Projects';
import Contacts from 'components/page_containers/Contact/Contacts';
import 'react-tooltip/dist/react-tooltip.css';

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <section id='home' className={`${styles.section} ${styles.sectionHome}`}>
          <Home />
        </section>

        <section id='about' className={`${styles.section} ${styles.sectionAbout}`}>
          <About />
        </section>

        <section id='skills' className={`${styles.section} ${styles.sectionSkills}`}>
          <Skills />
        </section>

        <section id='projects' className={`${styles.section} ${styles.sectionProjects}`}>
          <Projects />
        </section>

        <section id='contact' className={`${styles.section} ${styles.sectionContacts}`}>
          <Contacts />
        </section>

        <div className={styles.sandbox}></div>
      </main>
    </QueryClientProvider>
  );
=======
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
>>>>>>> 7632f75592102bb2e5fe16cd3353f15202bdc269
}
