import React, { useState } from "react";
import PlacementBar from "../PlacementBar";
import PlacementField from "../PlacmentField";
import ExportPlacementConfig from "../ExportPlacementConfig";
import { Button } from "react-bootstrap";
//mport { modifyStirngCommaToAmpersand } from "../../helpers";

function Placement({ isConfigField, setConfigField }) {
  const [placeSize, setPlaceSize] = useState([]);

  const setByCoords = (xCord, yCord, data) => {
    const newPlaceSize = [...placeSize];
    newPlaceSize[xCord][yCord] = data;
    setPlaceSize(newPlaceSize);
  };

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
    const dataWithOutHeaders = data.slice(1).map((row) => {
      const newRow = row.map((item) => {
        const formattedItem = item.replaceAll("&", ",");
        return JSON.parse(formattedItem);
      });
      return newRow;
    });

    setPlaceSize(dataWithOutHeaders);
    setConfigField(false);
  };

  const handlePrevButtonClick = () => {
    setConfigField(true);
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {isConfigField ? (
        <PlacementBar
          onSubmit={handleFormSubmit}
          onImportFile={handleImportConfButtonClick}
        />
      ) : (
        <>
          <PlacementField data={placeSize} setByCoords={setByCoords} />
          <div className="d-flex justify-content-between">
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

          <ExportPlacementConfig data={placeSize} />
        </>
      )}
    </div>
  );
}

export default Placement;
