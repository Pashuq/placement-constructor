import React, { useState } from "react";

import PlacementGridElement from "../PlacementGridElement";

function PlacementRow({ rowData, changeBorderIndicator }) {
  return (
    <div className="placementfield__row">
      {rowData.map((gridElement, index) => {
        const elementKey = Date.now() + "elementKey" + index;
        return (
          <PlacementGridElement
            elementData={gridElement}
            key={elementKey}
            // changeBorderIndicator={changeBorderIndicator}
          />
        );
      })}
    </div>
  );
}

export default PlacementRow;
