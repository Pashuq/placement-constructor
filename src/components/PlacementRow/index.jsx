import React from "react";

import PlacementGridElement from "../PlacementGridElement";

function PlacementRow({ rowData, rowId, setByCoords, isValidPlace }) {
  return (
    <div className="placementfield__row">
      {rowData.map((gridElement, index) => {
        const elementKey = Date.now() + "elementKey" + index;
        return (
          <PlacementGridElement
            elementData={gridElement}
            key={elementKey}
            rowId={rowId}
            elementId={index}
            setByCoords={setByCoords}
            isValidPlace={isValidPlace}
          />
        );
      })}
    </div>
  );
}

export default PlacementRow;
