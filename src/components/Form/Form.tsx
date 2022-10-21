import { Container, ContainerSuccess } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import arrowImage from "../../assets/arrow.svg";
import { useEffect } from "react";

export function Form() {
  const [state, handleSubmit] = useForm("mymessage");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email erfolgreich zugestellt", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  });
  if (state.succeeded) {
    return (
      <ContainerSuccess>
        <h3>Vielen Dank für Ihre Kontaktaufnahme!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Voltar ao topo
        </button>
        <ToastContainer />
      </ContainerSuccess>
    );
  }
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
      <ToastContainer />
    </Container>
  );
}
