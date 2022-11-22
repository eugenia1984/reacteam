import ContactForm from "../../components/contactform/ContactForm";
import Title from "../../generalcomponents/Title";

export const Contact = () => {
  return (
    <div className="container">
      <Title text="contacto" /> 
      <ContactForm />
    </div>
  );
}