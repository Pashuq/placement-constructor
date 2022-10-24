import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
//import { CSVLink } from "react-csv";
import { useCSVDownloader, usePapaParse } from "react-papaparse";
const {
  Parser,
  transforms: { unwind },
} = require("json2csv");

function ExportPlacementConfig({ data }) {
  const { jsonToCSV } = usePapaParse();
  const { CSVDownloader, Type } = useCSVDownloader();

  const formattedData = data.map((row) => {
    const newRow = row.map((item) => {
      try {
        const json = JSON.stringify(item).replaceAll(",", "&");
        return json;
      } catch (error) {
        return item;
      }
    });
    return newRow;
  });

  const json2csvParser = new Parser({ header: true });
  const csv = json2csvParser.parse(formattedData);

  return (
    <div>
      <CSVDownloader
        className="btn btn-primary"
        type={Type.Button}
        filename={"placeConfig"}
        bom={true}
        config={{
          delimiter: "",
          header: {},
        }}
        data={csv}
      >
        Сохранить конфигурацию
      </CSVDownloader>
    </div>
  );
}

export default ExportPlacementConfig;
