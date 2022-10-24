import React, { useState } from "react";
import cn from "classnames";
import { WIDTH_AND_HEIGHT_BLOCK } from "../../const";

import PlacementRow from "../PlacementRow";

function PlacementField({ data, setByCoords }) {
  const [borderErrorIndicator, setBorderErrorIndicator] = useState(false);

  return (
    <div
      className={cn("align-self-center placementfield-wrapper border rounded", {
        "border-primary": !borderErrorIndicator,
        "border-danger": borderErrorIndicator,
      })}
    >
      {data.map((row, index) => {
        const rowKey = Date.now() + "rowKey" + index;
        return (
          <PlacementRow
            key={rowKey}
            rowId={index}
            rowData={row}
            setByCoords={setByCoords}
            // changeBorderIndicator={changeBorderIndicator}
          />
        );
      })}
    </div>
  );
}

export default PlacementField;
