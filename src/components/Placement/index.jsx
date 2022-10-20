import React, { useState } from "react";
import PlacementBar from "../PlacementBar";
import PlacementField from "../PlacmentField";
import ExportPlacementConfig from "../exportPlacementConfig";
import { Button } from "react-bootstrap";

function Placement({ isConfigField, setConfigField }) {
  const [placeSize, setPlaceSize] = useState([]);

  const createPlacementByCoords = (y, x) => {
    const rows = [];
    for (let i = 0; i < x; i++) {
      const cols = [];
      for (let j = 0; j < y; j++) {
        cols.push("");
      }
      rows.push(cols);
    }
    return rows;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const coords = { x: Number(e.target.x.value), y: Number(e.target.y.value) };

    setPlaceSize(createPlacementByCoords(coords.x, coords.y));
    setConfigField(false);
  };

  const handleImportConfButtonClick = (data) => {
    setPlaceSize(data);
    setConfigField(false);
  };

  const handlePrevButtonClick = () => {
    setConfigField(true);
  };

  return (
    <div className="min-vh-100">
      {isConfigField ? (
        <PlacementBar
          onSubmit={handleFormSubmit}
          onImportFile={handleImportConfButtonClick}
        />
      ) : (
        <>
          <PlacementField data={placeSize} />
          <div className="d-flex justify-content-between">
            <ExportPlacementConfig data={placeSize} />
            <Button
              className="mb-4"
              variant="primary"
              type="button"
              onClick={() => {
                handlePrevButtonClick();
              }}
            >
              Вернуться к конфигуратору
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Placement;
