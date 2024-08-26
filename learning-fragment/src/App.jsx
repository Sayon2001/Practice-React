import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import FoodInput from "./components/FoodInput"
import ErrorMessage from "./components/ErrorMessage"
import Container from "./components/Container"
import { useState } from "react"

function App() {
  // let foodItems = []
  // let foodItems = ["Daal", "Roti", "Salad", "Milk", "Green Vegetables"]

  // let textStateArr = useState("Food Item Entered by User")
  // let textToShow = textStateArr[0]
  // let setTextState = textStateArr[1]

  // let [textToShow, setTextState] = useState("Food Item Entered by User")
  let [foodItems, setFoodItems] = useState([])

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      let newFoodItem = e.target.value
      setFoodItems([...foodItems, newFoodItem.trim()])
      e.target.value = ""
    }
    // console.log(e.target.value)
    // setTextState(`You entered: ${e.target.value}`)
  }
  return (
    <>
      <Container>
        <div className="list-food">
          <h1 className="food-heading">Healthy Food</h1>
          <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
          {/* <p>{textToShow}</p> */}
          <ErrorMessage items={foodItems} />
          <FoodItems items={foodItems} />
        </div>
      </Container>
      {/* <Container>
        <p>Above is the list of healthy foods that are good for your health and well being.</p>
      </Container> */}
    </>
  )
}

export default App
