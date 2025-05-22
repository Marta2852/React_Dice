import { useState, useEffect } from "react";
import "./Flower.css";

function Flower() {
  const [totalPetals, setTotalPetals] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [status, setStatus] = useState("Sāc noraut ziedlapiņas!");
  const [finalResult, setFinalResult] = useState(null);

  const options = ["Mīl", "Nemīl"];

  useEffect(() => {
    generateNewFlower();
  }, []);

  function generateNewFlower() {
    const petals = Math.floor(Math.random() * 11) + 5; 
    setTotalPetals(petals);
    setRemaining(petals);
    setFinalResult(null);
    setStatus("Sāc noraut ziedlapiņas!");
  }

  function pickPetal() {
    if (remaining <= 0 || finalResult) return;

    const newRemaining = remaining - 1;

    if (newRemaining === 0) {
      const result = options[(totalPetals - 1) % 2];
      setFinalResult(result + "!!! 🌸");
      setStatus("");
    } else {
      const index = (totalPetals - newRemaining - 1) % 2;
      setStatus(options[index]);
    }

    setRemaining(newRemaining);
  }

  return (
    <div className="flower">
      <h2>Vai viņš/viņa mīl?</h2>
      <p>Ziedlapiņas palikušas: {remaining}</p>

      {finalResult ? (
        <>
          <h3 className="result">{finalResult}</h3>
          <button onClick={generateNewFlower}>Sākt no jauna</button>
        </>
      ) : (
        <>
          <p className="status">{status}</p>
          <button onClick={pickPetal}>Noraut ziedlapu 🌸</button>
        </>
      )}
    </div>
  );
}

export default Flower;
