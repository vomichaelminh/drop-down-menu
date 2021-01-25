import React from "react";

const MenuItem = ({ item, handleOnClick, selected }) => {
  return (
    <li key={item.id}>
      <button type="button" onClick={handleOnClick}>
        <span>{item.value}</span>
        <span>{selected && <i className="fas fa-check"></i>}</span>
      </button>
    </li>
  );
};

export default MenuItem;
