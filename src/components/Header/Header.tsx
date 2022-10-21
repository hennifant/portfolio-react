import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState } from "react";

export function Header() {
  const [isactive, setActive] = useState(false);

  return (
    <Container>
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>H</span>
          <span>Schwichow</span>
        </HashLink>

        <nav className={isactive ? "active" : ""}>
          <NavHashLink smooth to="#home">
            Home
          </NavHashLink>
          <NavHashLink smooth to="#aboutme">
            About me
          </NavHashLink>
          <NavHashLink smooth to="#portfolio">
            Portfolio
          </NavHashLink>
        </nav>

        <div
          aria-expanded={isactive ? "true" : "false"}
          aria-haspopup="true"
          aria-label={isactive ? "Close menu" : "Open menu"}
          className={isactive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isactive);
          }}
        ></div>
      </Router>
    </Container>
  );
}
