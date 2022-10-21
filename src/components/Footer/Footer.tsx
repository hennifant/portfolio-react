import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer() {
  return (
    <Container>
      <a href="/" className="logo">
        <span>H</span>
        <span>Schwichow</span>
      </a>
      <div>
        <p>
          Diese Seite wurde mit <img src={reactIcon} alt="React Icon" /> und
          viel ❤️ erstellt
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/henning-schwichow-56b671237/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/hennifant" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/hennifantus"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="discordapp.com/users/" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  );
}
