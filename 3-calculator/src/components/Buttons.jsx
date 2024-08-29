import styles from './Buttons.module.css'

const Buttons = ({ onButtonClick }) => {
    const buttonNames = ['7', '8', '9', 'C', '4', '5', '6', '/', '1', '2', '3', '-', '0', '.', '=', '+']
    return (
        <div className={styles.buttonContainer}>
            {buttonNames.map((buttonName) =>
                <button className={styles.button} key={buttonName} onClick={() => onButtonClick(buttonName)} > {buttonName}</button>
            )
            }
        </div >
    )
}

export default Buttons;