import React, { useState } from 'react';
import './App.css';

function App() {

  const [faveThings, setFaveThings] = useState(
    [
      {
        name: "Raindrops on Roses",
        price: 20,
        order: 1
      },
      {
        name: "Whiskers on Kittens",
        price: 10,
        order: 2
      },
      {
        name: "Bright Copper Kettles",
        price: 54,
        order: 3
      },
      {
        name: "Warm Woolen Mittens",
        price: 12,
        order: 4
      },
      {
        name: "White Geese That Fly With The Moon on Their Wings",
        price: 10,
        order: 5
      }
    ]
  );

  const increasePrice = (index) => {
    let changedThings = [...faveThings];
    let item = {
      ...changedThings[index],
      price: changedThings[index].price + 1
    };
    changedThings[index] = item;

    setFaveThings(
      changedThings
    )
  }

  // this one is Telmo's description
  const changeName = (index) => {
    const newArray = [...faveThings];
    newArray[0].name = "Schnitzel With Noodles"
    setFaveThings(newArray)
  }

  return (
    <div className="App">
      <h1>Things That Are My Favourite</h1>
      <h2>Brought to you by React Hooks</h2>
      <ul>
        {faveThings.map((object, index) => {
          return <li key={index}>{object.order} {object.name}, Price: £{object.price}</li>
        })}
      </ul>
      <button id="btn" onClick={() => increasePrice(2)}>Increase Kettle Price</button>
      <button id="btn" onClick={() => changeName(0)}>Change Raindrops to Schnitzel</button>
    </div>
  );
}

export default App;
