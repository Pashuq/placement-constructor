import React from "react";

import PlacementGridElement from "../PlacementGridElement";

function PlacementRow({
  rowData,
  rowId,
  setByCoords,
  isValidPlace,
  deleteItemWithDepend,
}) {
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
            deleteItemWithDepend={deleteItemWithDepend}
          />
        );
      })}
    </div>
  );
}

export default PlacementRow;
