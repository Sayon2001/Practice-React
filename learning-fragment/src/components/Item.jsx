import styles from "./Item.module.css"

const Item = ({ foodItem }) => {

    const handleBuyButtonClicked = (e) => {
        console.log(e)
        console.log(`Bought ${foodItem}`)
    }
    return (
        <li className={`${styles['my-list-item']} list-group-item `}>
            <span>{foodItem}</span>
            <button className={`${styles.button} btn btn-info`} onClick={(e) => handleBuyButtonClicked(e)}>Buy</button>
        </li>
    )
}

export default Item;