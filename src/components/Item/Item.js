import React from 'react';
import "./Item.css"

function Item({ id, name, optional, note, questName, questId, requiredLevel}) {
  return (
    <div className="item" onClick={(event) => console.log(id)}>
      <p className="item-text">{name}</p>
    </div>
  );
}

export default Item;
