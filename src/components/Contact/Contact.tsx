import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Kontaktieren Sie mich</h2>
        <p>
          Wenn Sie mein Potential erkannt haben oder mir reden wollen, schicken
          Sie mir einfach eine Nachricht. Ich freue mich von Ihnen zu hören!
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:henning.schwichow@gmx.de">henning.schwichow@gmx.de</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+4917631390278">(049) 176-31390278</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
