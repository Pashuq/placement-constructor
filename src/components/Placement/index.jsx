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

  const pd1 = {
    table: "table1",
    imgUrl: "assets/tables/table-1.jpeg",
    sizeY: "3",
    sizeX: "3",
    currentElCoords: "12-7",
  };
  const pds = JSON.stringify(pd1);

  //console.log(pds);

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

  const [placeSize, setPlaceSize] = useState(mock2);

  const newMock3 = mock3.map((row) => {
    const newRow = row.map((item) => {
      return JSON.stringify(item);
    });
    return JSON.stringify(newRow);
  });

  const newMock3Str = JSON.stringify(newMock3);

  const parseMock3 = JSON.parse(newMock3Str);

  const parseMock3new = parseMock3.map((row) => {
    const newRow = JSON.parse(row);
    return newRow.map((item) => {
      return JSON.parse(item);
    });
  });

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
          {/* <PlacementField data={placeSize} setPlacementState={changeS} />
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
          </div> */}

          <ExportPlacementConfig data={placeSize} jsonData={newMock3} />
        </>
      )}
    </div>
  );
}

export default Placement;
