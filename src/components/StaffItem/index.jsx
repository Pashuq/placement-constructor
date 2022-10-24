import React from "react";
import { useDrag } from "react-dnd";

function StaffItem({ name }) {
  const style = {
    display: "inline-flex",
    backgroundColor: "red",
    width: "30px",
    height: "30px",
    cursor: "grab",
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "table",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {name}
    </div>
  );
}

export default StaffItem;
