import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"

function App() {
  // let foodItems = []
  let foodItems = ["Daal", "Roti", "Salad", "Milk", "Green Vegetables"]

  return (
    <>
      <div className="list-food">
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </div>
    </>
  )
}

export default App
