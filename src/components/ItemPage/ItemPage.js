import "./ItemPage.css"
import Item from "../Item/Item"

function ItemPage({currentItems}) {
  const allItems = currentItems.map((item) => {
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
      />
    )
  })



  return (
    <div className="item-page">
      {allItems}
    </div>
  )
}

export default ItemPage
