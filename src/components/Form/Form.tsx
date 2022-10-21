import { Container } from "./styles";
import { useForm, ValidationError } from "@formspree/react";

export function Form() {
  const [state, handleSubmit] = useForm("mymessage");

  return (
    <Container>
      <h2>Kontaktieren Sie mich auch gerne über dieses Formular</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          placeholder="Hinterlassen Sie hier Ihre Nachricht"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Absenden
        </button>
      </form>
    </Container>
  );
}
