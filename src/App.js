import React from "react";
import Menu from "./components/Menu";
import "./App.css";

const items = [
  {
    id: 1,
    value: "Milk",
  },
  {
    id: 2,
    value: "Water",
  },
  {
    id: 3,
    value: "Juice",
  },
  {
    id: 4,
    value: "Boba",
  },
  {
    id: 5,
    value: "Coffee",
  },
];

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Bottoms Up</h1>
      <Menu items={items} />
    </div>
  );
};

export default App;
