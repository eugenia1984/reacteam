import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardStyle.css";

export const CardListItem = props => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img 
        src={props.cardHomeInfo.image } 
        alt={props.cardHomeInfo.title} />
      <Card.ImgOverlay>
        <Card.Title
          className="mt-5 bg-dark bg-opacity-25 py-2 px-2">
          {props.cardHomeInfo.title}
        </Card.Title>
        <Card.Text
          className="pb-2 px-2 bg-dark bg-opacity-25">
          Last updated 3 mins ago
        </Card.Text>
        <Button variant="dark">
          {props.cardHomeInfo.btntext}
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
};