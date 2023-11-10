import React, { useState } from 'react';
import "./Item.css";
import PropTypes from "prop-types";

function Item({ id, name, rarity }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const textDecorationStyle = checked ? 'line-through' : 'none';

  return (
    <div className="item">
      <div className="containerx">
        <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
        <a
          href={`https://www.wowhead.com/wotlk/item=${id}`}
          className={rarity}
          style={{
            textDecoration: textDecorationStyle,
            cursor: 'pointer', 
          }}
          target="_blank" 
          onMouseOver={(e) => {
            if (textDecorationStyle === 'none') {
              e.target.style.textDecoration = 'underline';
            }
          }}
          onMouseOut={(e) => {
            if (textDecorationStyle === 'none') {
              e.target.style.textDecoration = textDecorationStyle;
            }
          }}
        >
          {name}
        </a>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired, 
  name: PropTypes.string.isRequired, 
  rarity: PropTypes.string.isRequired, 
};

export default Item;
