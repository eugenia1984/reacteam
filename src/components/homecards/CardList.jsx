import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardListItem } from "./CardListItem";
import cardHomeInfo from "./CardHomeInfo.jsx";


const CardList = () => {
  return (
    <div className="container">
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardHomeInfo.map(cardHomeInfo => {
          return (
            <Col>
              <CardListItem 
                cardHomeInfo={cardHomeInfo} 
                key={cardHomeInfo.id} />
            </Col>
          )
        })}
      </Row>
    </div>
  );
};

export default CardList;