import React from "react";
import { WIDTH_AND_HEIGHT_BLOCK } from "../../const";

import PlacementRow from "../PlacementRow";

function PlacementField({ data, setPlacementState }) {
  const itemStyles = {
    width: WIDTH_AND_HEIGHT_BLOCK + "px",
    height: WIDTH_AND_HEIGHT_BLOCK + "px",
    cursor: "Pointer",
  };

  //функция которая добавляет disabled для соседних элементов под фото
  function disabledElements(disY, disX, currentDisabledElCoords, arr) {
    if (!currentDisabledElCoords) {
      return [];
    }
    const [fristlvlIteratY, secondlvlIteratX] = currentDisabledElCoords
      .split("-")
      .map((coord) => Number(coord));

    const iterY = Number(fristlvlIteratY) + Number(disY);
    const iterX = Number(secondlvlIteratX) + Number(disX);

    const newArr = [...arr];

    for (let y = fristlvlIteratY; y < iterY; y++) {
      for (let x = secondlvlIteratX; x < iterX; x++) {
        if (newArr[y][x] === "") {
          newArr[y][x] = JSON.stringify({ disabled: "true" });
          //console.log(newArr);
        }
      }
    }

    return newArr;
  }

  return (
    <div className="placementfield-wrapper border border-primary rounded">
      {data.map((row, index) => {
        //console.log(row);
        const rowKey = Date.now() + "rowKey" + index;
        return <PlacementRow key={rowKey} rowData={row} />;
        //console.log(row);
        //return <p key={rowKey}>{index}</p>;
      })}
      {/* {data.map((row, index) => {
        const rowKey = Date.now() + "rowKey" + index;

        <p>123</p>; */}
      {/* <PlacementCol key={rowKey} colData={row} />; //return{" "}
      <PlacementRow key={rowKey} rowData={row} />; // })} */}
    </div>
  );

  // data.map((row, index) => {
  //   const rowKey = Date.now() + "rowKey" + index;
  //   return (
  //     <div key={rowKey} className="placementfield__row">
  //       {row.map((col, index) => {
  //         const colKey = Date.now() + "colKey" + index;
  //         if (col && col !== "") {
  //           const obj = JSON.parse(col);

  //           if (obj.currentElCoords) {
  //             console.log("1");
  //             return (
  //               <div
  //                 key={colKey}
  //                 style={itemStyles}
  //                 className="placementfield__item placementfield__item_disabled"
  //               >
  //                 <img
  //                   alt={obj.table1}
  //                   src={obj.imgUrl}
  //                   width={WIDTH_AND_HEIGHT_BLOCK * Number(obj.sizeX)}
  //                   height={WIDTH_AND_HEIGHT_BLOCK * Number(obj.sizeY)}
  //                 />
  //               </div>
  //             );
  //           } else {
  //             console.log("2");
  //             return (
  //               <div
  //                 key={colKey}
  //                 style={itemStyles}
  //                 className="placementfield__item placementfield__item_disabled"
  //               ></div>
  //             );
  //           }
  //         } else {
  //           console.log(3);
  //           return (
  //             <div
  //               key={colKey}
  //               style={itemStyles}
  //               className="placementfield__item"
  //             ></div>
  //           );
  //         }
  //       })}
  //     </div>
  //   );
  // });
  // };
}

export default PlacementField;
