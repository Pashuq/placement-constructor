import React from "react";

import CSVReader from "react-csv-reader";

function ImportPlacementConfig() {
  return (
    <div>
      <CSVReader
        onFileLoaded={(data, fileInfo, originalFile) =>
          console.dir(data, fileInfo, originalFile)
        }
      />
    </div>
  );
}

export default ImportPlacementConfig;
