import React from "react";
import {CardListItem} from "./CardListItem";
import cardInfo from "./CardInfo"

  const CardList = () => {
    return (
      <ul style={{ listStyleType: "none", display: "flex" }}>
        {cardInfo.map(cardInfo => {
          return <CardListItem cardInfo={cardInfo} key={cardInfo.id} />;
        })}
      </ul>
    );
  };

export default CardList;