import React, { useState } from 'react';
import "./Item.css"

function Item({ id, name, optional, note, questName, questId, requiredLevel, rarity }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="item">
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
      <a href={`https://www.wowhead.com/wotlk/item=${id}`} className={rarity} style={{ textDecoration: checked ? 'line-through' : 'none' }}>{name}</a>
    </div>
  );
}

export default Item;
