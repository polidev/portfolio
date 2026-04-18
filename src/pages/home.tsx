import Hero from "../components/ui/hero/hero.tsx";
import Projects from "../components/ui/projects/projects.tsx";
import Contact from "../components/ui/contact/contact.tsx";
import ToTop from "../components/layout/toTop/toTop.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
      <ToTop />
    </>
  );
}
