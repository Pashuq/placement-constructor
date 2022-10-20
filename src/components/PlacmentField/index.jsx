import React from "react";

function PlacementField({ data }) {
  const CalculatedField = () => {
    return data.map((row, index) => {
      const rowKey = Date.now() + "rowKey" + index;
      return (
        <div key={rowKey} className="placementfield__row">
          {row.map((col, index) => {
            const colKey = Date.now() + "colKey" + index;
            return <div key={colKey} className="placementfield__item"></div>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="placementfield-wrapper">
      <CalculatedField />
    </div>
  );
}

export default PlacementField;
