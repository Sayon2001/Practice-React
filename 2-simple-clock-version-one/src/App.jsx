import './App.css';
import ClockHeading from "./components/CLockHeading";
import ClockDesc from "./components/ClockDesc";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <div className="clock-container">
      <ClockHeading />
      <ClockDesc />
      <CurrentTime />
    </div>
  );
}

export default App;