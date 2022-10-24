import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { WIDTH_AND_HEIGHT_BLOCK, TARGET_PROP } from "../../const";

function PlacementGridElement({ elementData }) {
  const [elData, setElementData] = useState(elementData);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "table",
    //drop: () => ({ name: "Dustbin" }),
    drop: (itemk) => {
      //console.log(itemk);
      setElementData(itemk);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  let backgroundColor = "rgba(0,0,0, 0)";

  if (isActive) {
    backgroundColor = "rgba(40, 167, 69, .5)";
  } else if (canDrop) {
    backgroundColor = "rgba(220, 53, 69, .5)";
  }

  // const parsedELData = isNotEmptyElement(elData) ? JSON.parse(elData) : null;

  function isTargetElement(obj) {
    return obj.hasOwnProperty(TARGET_PROP);
  }

  function isNotEmptyElement(elValue) {
    if (elValue === "") {
      return false;
    }
    return elValue;
  }

  const itemStyles = {
    width: WIDTH_AND_HEIGHT_BLOCK + "px",
    height: WIDTH_AND_HEIGHT_BLOCK + "px",
    cursor: "Pointer",
  };

  const Item = isNotEmptyElement(elData) ? (
    isTargetElement(elData) ? (
      <div
        //ref={drop}
        style={{ ...itemStyles }}
        //data-testid="dustbin"
        className="placementfield__item placementfield__item_disabled "
      >
        <img
          alt={elData.table}
          src={elData.imgUrl}
          width={WIDTH_AND_HEIGHT_BLOCK * Number(elData.sizeX)}
          height={WIDTH_AND_HEIGHT_BLOCK * Number(elData.sizeY)}
        />
      </div>
    ) : (
      <div
        //ref={drop}
        style={{ ...itemStyles }}
        //data-testid="dustbin"
        className="placementfield__item placementfield__item_disabled "
      ></div>
    )
  ) : (
    <div
      ref={drop}
      style={{ ...itemStyles, backgroundColor }}
      data-testid="dustbin"
      className="placementfield__item 555"
    ></div>
  );

  return Item;
}

export default PlacementGridElement;
