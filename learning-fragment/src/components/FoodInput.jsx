import styles from './FoodInput.module.css'
const FoodInput = () => {
    const handleOnChange = (e) => {
        console.log(e.target.value)
    }
    return <input placeholder='Enter Food Item here' className={styles.foodInput} type="text" onChange={handleOnChange} />
}

export default FoodInput;