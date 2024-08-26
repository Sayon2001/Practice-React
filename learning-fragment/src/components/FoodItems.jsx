import { useState } from "react"
import Item from "./Item"

const FoodItems = ({ items }) => {

    let [activeItems, setActiveItems] = useState([])

    let onBuyButtonClick = (item, e) => {
        let newItems = [...activeItems, item]
        setActiveItems(newItems)
    }
    return (
        <ul className="list-group">
            {items.map((item) => {
                return (
                    <Item key={item} foodItem={item} bought={activeItems.includes(item)} handleBuyButton={(e) => onBuyButtonClick(item, e)}></Item>
                )
            })}
        </ul>
    )
}

export default FoodItems;