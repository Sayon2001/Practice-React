import styles from './App.module.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
function App() {
  return (<>
    <div className={styles.calculator}>
      <Display />
      <Buttons />
    </div>
  </>
  )
}

export default App
