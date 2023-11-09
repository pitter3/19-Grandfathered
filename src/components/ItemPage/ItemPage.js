import React from 'react';
import './ItemPage.css';
import Item from '../Item/Item';

function ItemPage({ currentItems, currentFaction }) {
  if (currentItems === null) {
    // Redirect to the home page using href
    window.location.href = '/';
    return null; // You might want to return null to prevent further rendering
  }

  let filteredItems;

  if (currentFaction === 'both') {
    // If currentClass is 'both', don't filter; display all items.
    filteredItems = currentItems;
  } else {
    // Filter items based on the selected faction.
    filteredItems = currentItems.filter((item) => {
      // Check if the item's faction matches the selected faction or if the item's faction is 'both'.
      return item.faction === currentFaction || item.faction === 'both';
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
      <div>hello</div>
      <div className="items-container">{allItems}</div>
    </div>
  );
}

export default ItemPage;