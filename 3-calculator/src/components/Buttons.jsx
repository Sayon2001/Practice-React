import styles from './Buttons.module.css'

const Buttons = () => {
    const buttonNames = ['7', '8', '9', 'C', '4', '5', '6', '/', '1', '2', '3', '-', '0', '.', '=', '+']
    return (
        <div className={styles.buttonContainer}>
            {buttonNames.map((item) =>
                <button className={styles.button} key={item}>{item}</button>
            )}
        </div>
    )
}

export default Buttons;