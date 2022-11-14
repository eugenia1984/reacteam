import Form from 'react-bootstrap/Form';

function LabelForm( { text }) {
  return (
    <Form.Label 
      className="mb-2">
      { text} 
    </Form.Label>
  );
} 

export default LabelForm;