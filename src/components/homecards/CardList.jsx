import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardListItem } from "./CardListItem";
import cardHomeInfo from "./CardHomeInfo.js";
import Title from "./../../generalcomponents/Title"

const CardList = () => {
  return (
    <div className="container mb-5">
      <Title text="categorias" />
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