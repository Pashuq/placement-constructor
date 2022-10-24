import React, { useState } from "react";
import PlacementBar from "../PlacementBar";
import PlacementField from "../PlacmentField";
import ExportPlacementConfig from "../ExportPlacementConfig";
import { Button } from "react-bootstrap";
//mport { modifyStirngCommaToAmpersand } from "../../helpers";

function Placement({ isConfigField, setConfigField }) {
  const [placeSize, setPlaceSize] = useState([]);

  const setByCoords = (yCord, xCord, data) => {
    const newPlaceSize = [...placeSize];
    newPlaceSize[yCord][xCord] = data;

    disableDependentItems({
      state: newPlaceSize,
      xCord,
      yCord,
      xSize: data.sizeX,
      ySize: data.sizeY,
      data: { disabled: true },
    });

    setPlaceSize(newPlaceSize);
  };

  //элементы в которых не лежит блок на прямую, но которые требуется как подложка
  const disableDependentItems = ({
    state,
    xCord,
    yCord,
    xSize,
    ySize,
    data,
  }) => {
    //находим координату интересуемого элемента
    //const currentItem = state[yCord][xCord];

    //цикл по row
    for (let y = Number(yCord); y < Number(ySize) + Number(yCord); y++) {
      //цикл по элементу
      for (let x = Number(xCord); x < Number(xSize) + Number(xCord); x++) {
        if (!state[y][x]) {
          state[y][x] = data;
        }
      }
    }

    return state;
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
