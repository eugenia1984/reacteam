import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardListItem = props => {
  return (
    <li>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" className="card-image" src={props.cardInfo.image} alt="description" />
        <Card.Body>
          <Card.Title>
            {props.cardInfo.title}
          </Card.Title>
          <Card.Text>
            {props.cardInfo.text}
          </Card.Text>
          <Button variant="primary">Buy now</Button>
        </Card.Body>
      </Card>
    </li>
  );
};