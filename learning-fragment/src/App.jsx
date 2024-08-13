import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  // let foodItems = []
  let foodItems = ["Daal", "Roti", "Salad", "Milk", "Green Vegetables"]

  // let emptyMessage = foodItems.length === 0 ? <h3>No Food Items Added Yet.</h3> : null;

  // if (foodItems.length === 0) {
  //   return <h1>No food items added yet.</h1>
  // }

  return (
    <>
      <div className="list-food">
        <h1>Healthy Food</h1>
        {foodItems.length === 0 && <h1>No food items added yet.</h1>}
        {/* {emptyMessage} */}
        {/* {foodItems.length === 0 ? <h1>No food items added yet.</h1> : null} */}
        <ul className="list-group">
          {
            foodItems.map((item) => {
              return <li key={item} className="list-group-item">{item}</li>

            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
