import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardHomeInfo from './CardHomeInfo';

export const CardListItem = props => {
  console.log(cardHomeInfo);
  return (
    <h1>card</h1>
    /*
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
        <Button variant="primary">
          {props.cardHomeInfo.text}
        </Button>
      </Card.ImgOverlay>
    </Card>
    */
  );
};