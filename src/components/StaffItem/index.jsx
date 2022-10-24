import React from "react";
import { useDrag } from "react-dnd";

function StaffItem({ name }) {
  const style = {
    display: "inline-flex",
    backgroundColor: "rgba(0,0,0, .1)",
    width: "30px",
    height: "30px",
    cursor: "grab",
  };

  const staffPayload = {
    table: "table1",
    imgUrl: "assets/tables/table-1.jpeg",
    sizeY: "3",
    sizeX: "3",
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "table",
    item: { name, ...staffPayload },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        //console.log(`You dropped ${item.name} into ${dropResult.name}!`);
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
