import React from "react";
import { CSVLink } from "react-csv";

function ExportPlacementConfig({ data }) {
  //console.log(data);
  return (
    <div>
      <CSVLink
        data={data}
        filename={"placement-conf.csv"}
        className="btn btn-primary"
        target="_blank"
      >
        Сохранить конфигурацию
      </CSVLink>
    </div>
  );
}

export default ExportPlacementConfig;
