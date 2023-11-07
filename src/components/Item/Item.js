import React from 'react';
import "./Item.css"

function Item({ id, name, optional, note, questName, questId, requiredLevel, rarity}) {
  return (
    <div className="item" onClick={(event) => console.log(id)}>
      <a href={`https://www.wowhead.com/wotlk/item=${id}`} class={rarity}>{name}</a>
    </div>
  );
}

export default Item;
