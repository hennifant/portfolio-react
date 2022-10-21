import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
/* import Illustration from "../../assets/illustration.svg"; */
import { NavHashLink } from "react-router-hash-link";
export function Myself() {
  return (
    <Container id="home">
      <div className="myself-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Moin, Moin, mein Name ist</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Henning Schwichow</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <h3>Frontend Entwickler</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <p className="small-resume">
            Ich bin Quereinsteiger in die IT und habe in einem Bootcamp bei neue
            fische gelernt Web Applikationen mit JavaScript und React zu
            programmieren. Gerade lerne ich TypeScript und bin gespannt wohin
            mich meine Reise noch führen wird.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1.4 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="myself-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img alt="Illustration von mir" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
