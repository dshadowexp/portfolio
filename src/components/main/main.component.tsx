import About from "./about/about.component";
import Contact from "./contact/contact.component";
import Summary from "./summary/summary.component";
import Projects from './projects/projects.component';

export default function Main() {
    return (<main>
        <Summary />
        <About />
        <Projects />
        <Contact />
    </main>);
}