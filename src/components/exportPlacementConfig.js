import React from "react";
//import { CSVLink } from "react-csv";
import { useCSVDownloader, usePapaParse } from "react-papaparse";

function ExportPlacementConfig({ data, jsonData }) {
  const { jsonToCSV } = usePapaParse();
  const { CSVDownloader, Type } = useCSVDownloader();

  //const newDat = JSON.stringify(data);

  //const results2 = jsonToCSV(data);

  //console.log(results1);
  //console.log(results2);

  const aa = JSON.stringify(jsonData);
  //const results1 = jsonToCSV(aa);

  console.log(aa);

  return (
    <div>
      {/* <CSVDownloader
        className="btn btn-primary"
        type={Type.Button}
        filename={"placeConfig"}
        bom={true}
        config={{
          delimiter: ",",
        }}
        data={results1}
      >
        Сохранить конфигурацию
      </CSVDownloader> */}
    </div>
  );
}

export default ExportPlacementConfig;
