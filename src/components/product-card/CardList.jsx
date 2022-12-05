import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardListItem } from "./CardListItem";
import Title from "../../generalcomponents/Title";
import DUMMY_PRODUCTS from "../../data";

export const CardList = ({ text}) => {
  return (
    <div className="container mb-5">
      <Title text={text} />
      <Row xs={1} md={2} lg={3} className="g-4">
        {DUMMY_PRODUCTS.map(product => {
          return (
            <Col key={product.id}>
              <CardListItem
                product={product}
                key={product.id} 
                btnText="Ver"/>
            </Col>
          )
          
        })}
        
      </Row>
    </div>
  );
};
