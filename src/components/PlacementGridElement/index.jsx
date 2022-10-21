import React from "react";
import { WIDTH_AND_HEIGHT_BLOCK } from "../../const";

function PlacementGridElement({ elementData }) {
  const itemStyles = {
    width: WIDTH_AND_HEIGHT_BLOCK + "px",
    height: WIDTH_AND_HEIGHT_BLOCK + "px",
    cursor: "Pointer",
  };

  return <div style={itemStyles} className="placementfield__item"></div>;
}

export default PlacementGridElement;
