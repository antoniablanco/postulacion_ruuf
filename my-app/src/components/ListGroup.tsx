import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onItemSelect?: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelect }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                if (onItemSelect) {
                  onItemSelect(item);
                }
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
