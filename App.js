import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  /**
   * Input state management logic here
   */
  const [data, setData] = useState(" ");

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {
        <input
          type="text"
          name="name"
          onChange={(e) => setData(e.target.value)}
        />
      }

      <div className="cards">
        {pokemons
          .filter((item) => {
            if (data === " ") {
              return data;
            } else if (item.name.toLowerCase().startsWith(data.toLowerCase())) {
              return item;
            }
          })
          .map((el) => {
            return (
              <>
                <CardItem name={el.name} sprite={el.sprite} />
              </>
            );
          })}
      </div>
    </div>
  );
}
