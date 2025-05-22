import { useState } from "react";
import './Coin.css';
import heads from "./assets/coin/heads.webp";
import tails from "./assets/coin/tails.webp";

const headTail = [heads, tails];

function Coin() {
  const [side, setSide] = useState(0); // 0 = heads, 1 = tails

  function flipCoin() {
    const result = Math.floor(Math.random() * 2); // 0 or 1
    setSide(result);
  }

  return (
    <article className="coin">
      <h2>Monētas mešana</h2>
      <button onClick={flipCoin}>Mest monētu</button>
      <p>Rezultāts: <strong>{side === 0 ? "Galva" : "Astes"}</strong></p>
      <img
        src={headTail[side]}
        alt={side === 0 ? "Galva" : "Astes"}
      />
    </article>
  );
}

export default Coin;
