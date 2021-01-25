import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleOnClick = (item) => {
    if (selected.includes(item.id)) {
      setSelected(selected.filter((value) => value !== item.id));
    } else {
      setSelected([...selected, item.id]);
    }
  };

  const handleDeselectAll = () => {
    setSelected([]);
  };

  return (
    <div className="menu">
      <div className="menu-header" onClick={() => setOpen(!open)}>
        <span className="menu-header-selected">
          {selected.length > 0
            ? items.map(
                (item) => selected.includes(item.id) && item.value + " "
              )
            : "Select Beverage"}
        </span>
        <span className="menu-option">
          {open ? (
            <i className="fas fa-arrow-up"></i>
          ) : (
            <i className="fas fa-arrow-down"></i>
          )}
        </span>
      </div>
      <div className="deselect">
        {open ? (
          <button type="button" onClick={() => handleDeselectAll()}>
            Deselect All
          </button>
        ) : (
          ""
        )}
      </div>

      {open && (
        <ul className="menu-items">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              selected={selected.includes(item.id)}
              handleOnClick={() => handleOnClick(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
