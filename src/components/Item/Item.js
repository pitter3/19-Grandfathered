import React, { useState } from 'react';
import "./Item.css"
import PropTypes from "prop-types";

function Item({ id, name, rarity }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="item">
      <div className="containerx"><input type="checkbox" checked={checked} onChange={handleCheckboxChange} /><a href={`https://www.wowhead.com/wotlk/item=${id}`} className={rarity} style={{ textDecoration: checked ? 'line-through' : 'none' }}>{name}</a></div>
    </div>
  );
}

export default Item;

Item.propTypes = {
  id: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired, 
  rarity: PropTypes.string.isRequired, 
};