import styles from "./Item.module.css"

const Item = ({ foodItem }) => {
    return (
        <li className={`${styles['my-list-item']} list-group-item `}>{foodItem}</li>
    )
}

export default Item;