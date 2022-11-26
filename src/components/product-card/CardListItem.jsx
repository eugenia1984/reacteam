import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export const CardListItem = props => {
  const navigate = useNavigate();

  const handlerClick = () => {
    // aca despues hay que hacer que vaya dinamicamente al detalle del producto por id
    navigate(`/productos`)
  }

  return (
    <Card style={{ width: '230px' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668876928/alta-pinta/campera_d3zggp.jpg" />
      <Card.Body>
        <Card.Title>Campera</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark" onClick={ handlerClick }>Comprar</Button>
      </Card.Body>
    </Card>
  );
};