import './App.css';
import Dice from "./Dice";
import Coin from "./Coin";
import Flower from "./Flower";

function App() {
  return (
    <div className="app-container">
      <h1>Gājienu palīgs</h1>

      <div className="component-wrapper">
        <Dice />
      </div>

      <div className="component-wrapper">
        <Coin />
      </div>

      <div className="component-wrapper">
        <Flower />
      </div>
    </div>
  );
}

export default App;
