import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import Container from "./components/Container"

function App() {
  // let foodItems = []
  let foodItems = ["Daal", "Roti", "Salad", "Milk", "Green Vegetables"]

  return (
    <>
      <Container>
        <div className="list-food">
          <h1 className="food-heading">Healthy Food</h1>
          <ErrorMessage items={foodItems} />
          <FoodItems items={foodItems} />
        </div>
      </Container>
      <Container>
        <p>Above is the list of healthy foods that are good for your health and well being.</p>
      </Container>
    </>
  )
}

export default App
