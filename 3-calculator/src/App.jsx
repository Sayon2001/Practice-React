import styles from './App.module.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'
function App() {

  const [calValue, setCalVal] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("")
    } else if (buttonText === "=") {
      const result = eval(calValue)
      setCalVal(result.toString())
    } else {
      const newDisplayedValue = calValue + buttonText
      setCalVal(newDisplayedValue)
    }
  }
  return (<>
    <div className={styles.calculator}>
      <Display displayValue={calValue} ></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  </>
  )
}

export default App
