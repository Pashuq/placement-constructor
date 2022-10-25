import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { WIDTH_AND_HEIGHT_BLOCK, TARGET_PROP } from "../../const";

function PlacementGridElement({
  elementData,
  rowId,
  elementId,
  setByCoords,
  isValidPlace,
  deleteItemWithDepend,
}) {
  const [elData, setElementData] = useState(elementData);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "table",
    drop: (item, monitor) => {
      setByCoords(rowId, elementId, item);
    },
    canDrop: (item) => {
      const res = isValidPlace({
        yCord: rowId,
        xCord: elementId,
        xSize: item.sizeX,
        ySize: item.sizeY,
      });

      if (res) {
        return true;
      }
      return false;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  let backgroundColor = "rgba(0,0,0, 0)";

  if (isActive) {
    backgroundColor = "rgba(40, 167, 69, 1)";
  } else if (canDrop) {
    backgroundColor = "rgba(40, 167, 69, .5)";
  }

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
  };

  const Item = isNotEmptyElement(elData) ? (
    isTargetElement(elData) ? (
      <div
        style={{ ...itemStyles, position: "relative" }}
        className="placementfield__item placementfield__item_disabled"
      >
        <div
          onClick={() => {
            deleteItemWithDepend(rowId, elementId, elData);
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            outline: "1px solid rgba(40, 167, 69, .5)",
            cursor: "pointer",
            backgroundColor: "#ffffff",
          }}
        >
          &#9746;
        </div>
        <img
          alt={elData.table}
          src={elData.imgUrl}
          width={WIDTH_AND_HEIGHT_BLOCK * Number(elData.sizeX)}
          height={WIDTH_AND_HEIGHT_BLOCK * Number(elData.sizeY)}
        />
      </div>
    ) : (
      <div
        style={{ ...itemStyles }}
        className="placementfield__item placementfield__item_disabled "
      ></div>
    )
  ) : (
    <div
      ref={drop}
      style={{ ...itemStyles, backgroundColor }}
      data-testid="dustbin"
      className="placementfield__item "
    ></div>
  );

  return Item;
}

export default PlacementGridElement;
