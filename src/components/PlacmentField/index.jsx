import React, { useState } from "react";
import cn from "classnames";

import PlacementRow from "../PlacementRow";

function PlacementField({
  data,
  setByCoords,
  isValidPlace,
  deleteItemWithDepend,
}) {
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
            isValidPlace={isValidPlace}
            deleteItemWithDepend={deleteItemWithDepend}
          />
        );
      })}
    </div>
  );
}

export default PlacementField;
