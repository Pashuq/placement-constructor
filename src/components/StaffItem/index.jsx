import React from "react";
import { useDrag } from "react-dnd";
import { WIDTH_AND_HEIGHT_BLOCK } from "../../const";

function StaffItem({ name, imageUrl, sizeX, sizeY }) {
  const style = {
    display: "inline-flex",
    backgroundColor: "rgba(0,0,0, .1)",
    width: WIDTH_AND_HEIGHT_BLOCK * sizeX + "px",
    height: WIDTH_AND_HEIGHT_BLOCK * sizeY + "px",
    cursor: "grab",
  };

  //WIDTH_AND_HEIGHT_BLOCK
  const staffPayload = {
    table: name,
    imgUrl: imageUrl,
    sizeY,
    sizeX,
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "table",
    item: { name, ...staffPayload },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

export default StaffItem;
