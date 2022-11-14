import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import LabelForm from "../../generalcomponents/LabelForm";
import "./ContactFormStyle.css";


const initialState = { 
  name: '', 
  email: '', 
  comment: '' 
};

function ContactForm() {

  const [form, setForm] = useState(initialState)

  const inputChangeHandle = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(form);
    Swal.fire({
      icon: 'success',
      title: 'Gracias por la consulta',
      text: 'Estaremos respondiendo dentro de las 24 hras hábiles.',
    })
  }

  return (
    <Form className="row g-3 form-mx-width">
      <Form.Group className="col-md-6 mb-4" controlId="formBasicName">
        <LabelForm text="Ingresa tu nombre:"/>
        <Form.Control 
          type="text" 
          name="name"
          value={ form.name }
          className="form-control my-2"
          placeholder="Ingresa su nombre"
          onChange={ inputChangeHandle }  
          required
        />
      </Form.Group>
      <Form.Group className="col-md-6 mb-4" controlId="formBasicEmail">
        <LabelForm text="Ingresa tu email:"/>
        <Form.Control 
          type="email" 
          name="email"
          value={ form.email }
          className="form-control my-2"
          placeholder="Ingresa tu email"
          onChange={ inputChangeHandle }
          required
        />
        <Form.Text className="text-muted">
          No compartiremos tu email con nadie más.
        </Form.Text>
      </Form.Group>
      <Form.Group className="col-12 mb-4" controlId="formBasicComment">
        <LabelForm text="Ingresa tu comentario:"/>
        <Form.Control 
          as="textarea"
          name="comment"
          value={ form.comment}
          className='form-control my-2'
          rows={ 5 }
          placeholder="Ingresa tu comentario..."
          onChange={ inputChangeHandle }
        />
      </Form.Group>
      <Button 
        variant="dark" 
        type="submit"
        onClick={ handleClick } >
        Enviar
      </Button>
    </Form>
  )
}

export default ContactForm;