import React, { useState } from "react";
import PlacementBar from "../PlacementBar";
import PlacementField from "../PlacmentField";
import ExportPlacementConfig from "../ExportPlacementConfig";
import { Button } from "react-bootstrap";
import { modifyStirngCommaToAmpersand } from "../../helpers";

function Placement({ isConfigField, setConfigField }) {
  const mock2 = [
    [
      "{'table': 'table1'; 'imgUrl' : 'assets/tables/table-1.jpeg', 'sizeY': '3', 'sizeX': '3', 'currentElCoords' : '12-7'}",
      '{"disabled":"true"}',
      '{"disabled":"true"}',
      "",
      "",
      "",
      "",
      '{"table": "table1", "imgUrl" : "assets/tables/table-1.jpeg", "sizeY": "3", "sizeX": "3", "currentElCoords" : "12-7"}',
      '{"disabled":"true"}',
      '{"disabled":"true"}',
    ],
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

  const mock3 = [
    [
      {
        table: "table1",
        imgUrl: "assets/tables/table-1.jpeg",
        sizeY: "3",
        sizeX: "3",
        currentElCoords: "12-7",
      },
      { disabled: "true" },
      { disabled: "true" },
      "0",
      "0",
      "0",
      "0",
      {
        table: "table1",
        imgUrl: "assets/tables/table-1.jpeg",
        sizeY: "3",
        sizeX: "3",
        currentElCoords: "12-7",
      },
      { disabled: "true" },
      { disabled: "true" },
    ],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    [
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      {
        table: "table1",
        imgUrl: "assets/tables/table-1.jpeg",
        sizeY: "3",
        sizeX: "3",
        currentElCoords: "12-7",
      },
      { disabled: "true" },
      { disabled: "true" },
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      { disabled: "true" },
      { disabled: "true" },
      { disabled: "true" },
    ],
    [
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      { disabled: "true" },
      { disabled: "true" },
      { disabled: "true" },
    ],
  ];

  const [placeSize, setPlaceSize] = useState(mock3);

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
