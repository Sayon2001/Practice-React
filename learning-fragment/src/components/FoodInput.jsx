import styles from './FoodInput.module.css'
const FoodInput = ({ handleOnKeyDown }) => {
    return <input placeholder='Enter Food Item here' className={styles.foodInput} type="text" onKeyDown={handleOnKeyDown} />
}

export default FoodInput;