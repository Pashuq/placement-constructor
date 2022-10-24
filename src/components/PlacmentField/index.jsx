import React from "react";
import { WIDTH_AND_HEIGHT_BLOCK } from "../../const";

import PlacementRow from "../PlacementRow";

function PlacementField({ data, setPlacementState }) {
  return (
    <div className="align-self-center placementfield-wrapper border border-primary rounded">
      {data.map((row, index) => {
        const rowKey = Date.now() + "rowKey" + index;
        return <PlacementRow key={rowKey} rowData={row} />;
      })}
    </div>
  );
}

export default PlacementField;
