import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardListItem = props => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img 
        src={props.cardHomeInfo.image } 
        alt={props.cardHomeInfo.title} />
      <Card.ImgOverlay>
        <Card.Title>
          {props.cardHomeInfo.title}
        </Card.Title>
        <Card.Text>
          Last updated 3 mins ago
        </Card.Text>
        <Button variant="dark">
          {props.cardHomeInfo.btntext}
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
};