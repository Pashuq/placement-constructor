import React from "react";
import { CSVLink } from "react-csv";

function ExportPlacementConfig({ data }) {
  // const data = [
  //   { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  //   { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  //   { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  // ];

  // const data = [
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  //   ["", "", "", "", "", "", ""],
  // ];

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
