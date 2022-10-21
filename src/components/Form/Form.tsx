import { Container, ContainerSuccess } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
  const [state, handleSubmit] = useForm("mymessage");

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

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
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Hinterlassen Sie hier Ihre Nachricht"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey="6LcyjpwiAAAAAMQhFfs-TxFERxwiV4PDi10f-Qny"
          onChange={(e) => {
            setIsHuman(true);
          }}
        ></ReCAPTCHA>
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Absenden
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
