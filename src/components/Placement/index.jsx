import React, { useState } from "react";
import PlacementBar from "../PlacementBar";
import PlacementField from "../PlacmentField";
import ExportPlacementConfig from "../exportPlacementConfig";
import { Button } from "react-bootstrap";

function Placement({ isConfigField, setConfigField }) {
  const str = JSON.stringify({ fig: "table" });

  const mockData = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      '{"table": "table1", "imgUrl" : "assets/tables/table-1.jpeg", "sizeY": "3", "sizeX": "3", "currentElCoords" : "12-7"}',
      "",
      "",
    ],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  const mock2 = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      '{"table": "table1", "imgUrl" : "assets/tables/table-1.jpeg", "sizeY": "3", "sizeX": "3", "currentElCoords" : "12-7"}',
      '{"disabled":"true"}',
      '{"disabled":"true"}',
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      '{"disabled":"true"}',
      '{"disabled":"true"}',
      '{"disabled":"true"}',
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      '{"disabled":"true"}',
      '{"disabled":"true"}',
      '{"disabled":"true"}',
    ],
  ];

  const [placeSize, setPlaceSize] = useState(mock2);

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

  const changeS = (data) => {
    console.log(data);
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
          <PlacementField data={placeSize} setPlacementState={changeS} />
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
