import React from "react";

import CSVReader from "react-csv-reader";

function ImportPlacementConfig({ onImportFile }) {
  return (
    <div>
      <CSVReader
        cssInputClass="form-control"
        onFileLoaded={(data) => {
          onImportFile(data);
        }}
      />
    </div>
  );
}

export default ImportPlacementConfig;
