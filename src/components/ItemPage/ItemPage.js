import "./ItemPage.css"
import Item from "../FactionPic/FactionPic"

function ItemPage({items}) {
  const allItems = items.map((item) => {
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
