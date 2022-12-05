import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import "./CardStyled.css";
import DUMMY_PRODUCTS from "../../data";

export const CardListItem = ( { btnText, product }) => {
  const navigate = useNavigate();

  const {id, title, price, srcImg } = product;
  const handlerClick = () => {
    // aca despues hay que hacer que vaya dinamicamente al detalle del producto por id
    navigate(`/productos`)
  }

  return (
    <> 
      <Card 
        className="product-card"
        key={id}>
        <Card.Img 
        className="product-card-img"
          variant="top" 
          src={srcImg[0]} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Button variant="dark" onClick={ handlerClick }>{btnText}</Button>
        </Card.Body>
      </Card>
    </>
    
  );
};