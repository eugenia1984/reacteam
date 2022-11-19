import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import "./CardStyle.css";

export const CardListItem = props => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/productos/${props.cardHomeInfo.to}`)
  }

  return (
    <Card 
      className="bg-dark text-white"
      key={props.cardHomeInfo.id}>
      <Card.Img 
        src={props.cardHomeInfo.image } 
        alt={props.cardHomeInfo.title} />
      <Card.ImgOverlay>
        <Card.Title
          className="mt-5 bg-dark bg-opacity-25 py-2 px-2">
          {props.cardHomeInfo.title}
        </Card.Title>
        <Button 
          variant="dark"
          onClick={ handlerClick }>
          {props.cardHomeInfo.btntext}
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
};