import React from "react";
import "./ItemPage.css";
import Item from "../Item/Item";
import StatusText from "../StatusText/StatusText";
import PropTypes from "prop-types";

function ItemPage({ currentItems, currentFaction, currentClass }) {
  if (currentItems === null) {
    window.location.href = "/";
    return null;
  }

  let filteredItems;

  if (currentFaction === "Both") {
    filteredItems = currentItems;
  } else {
    filteredItems = currentItems.filter((item) => {
      return item.faction === currentFaction || item.faction === "Both";
    });
  }

  const allItems = filteredItems.map((item) => {
    return (
      <Item
        key={item.itemId}
        id={item.itemId}
        name={item.name}
        optional={item.optional}
        note={item.note}
        questName={item.questName}
        questId={item.questId}
        requiredLevel={item.requiredLevel}
        rarity={item.rarity}
      />
    );
  });

  return (
    <div className="item-page">
      <StatusText currentClass={currentClass} currentFaction={currentFaction} />
      <div className="items-container">{allItems}</div>
    </div>
  );
}

export default ItemPage;

ItemPage.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rarity: PropTypes.string.isRequired,
    })
  ),
  currentFaction: PropTypes.string,
  currentClass: PropTypes.string,
};
