import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LabelForm from "../../generalcomponents/LabelForm";

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
  }
  
  return (
    <Form className="col-sm-10 col-md-8 mb-5">
      <Form.Group className="mb-4" controlId="formBasicName">
        <LabelForm text="Ingresa tu nombre:"/>
        <Form.Control 
          type="text" 
          name="name"
          value={ form.name }
          className="form-control my-2"
          placeholder="Ingresa su nombre"
          onChange={ inputChangeHandle }  
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <LabelForm text="Ingresa tu email:"/>
        <Form.Control 
          type="email" 
          name="email"
          value={ form.email }
          className="form-control my-2"
          placeholder="Ingresa tu email"
          onChange={ inputChangeHandle }
        />
        <Form.Text className="text-muted">
          No compartiremos tu email con nadie más.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicComment">
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
        variant="primary" 
        type="submit"
        onClick={ handleClick } >
        Enviar
      </Button>
    </Form>
  )
}

export default ContactForm;