import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardListItem } from "./CardListItem";
import Title from "../../generalcomponents/Title";

export const CardList = ({ text}) => {
  return (
    <div className="container mb-5">
      <Title text={text} />
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col key={1}>
          <CardListItem btnText="Ver"/>
        </Col>
      </Row>
    </div>
  );
};
