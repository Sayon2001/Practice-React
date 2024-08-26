import styles from "./Item.module.css"

const Item = ({ foodItem, bought, handleBuyButton }) => {
    return (
        <li className={`${styles['my-list-item']} list-group-item ${bought && 'active'}`}>
            <span>{foodItem}</span>
            <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>Buy</button>
        </li>
    )
}

export default Item;