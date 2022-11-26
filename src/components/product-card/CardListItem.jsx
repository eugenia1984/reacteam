import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import "./CardStyled.css";

export const CardListItem = ( { btnText }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    // aca despues hay que hacer que vaya dinamicamente al detalle del producto por id
    navigate(`/productos`)
  }

  return (
    <Card className="product-card">
      <Card.Img 
      className="product-card-img"
        variant="top" 
        src="https://res.cloudinary.com/dtq1qaw4z/image/upload/v1668876928/alta-pinta/campera_d3zggp.jpg" />
      <Card.Body>
        <Card.Title>Campera</Card.Title>
        <Card.Text>$ 10.000</Card.Text>
        <Button variant="dark" onClick={ handlerClick }>{btnText}</Button>
      </Card.Body>
    </Card>
  );
};