import React, { useState } from "react";
import { WIDTH_AND_HEIGHT_BLOCK, TARGET_PROP } from "../../const";

function PlacementGridElement({ elementData }) {
  const [elData, setElementData] = useState(elementData);

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

  const A = isNotEmptyElement(elData) ? (
    isTargetElement(elData) ? (
      <div
        style={itemStyles}
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
        style={itemStyles}
        className="placementfield__item placementfield__item_disabled "
      >
        d
      </div>
    )
  ) : (
    <div style={itemStyles} className="placementfield__item">
      0
    </div>
  );

  return A;
}

export default PlacementGridElement;
