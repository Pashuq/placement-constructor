import "./App.css";
import ExportPlacementConfig from "./components/exportPlacementConfig";
import ImportPlacementConfig from "./components/importPlacementConfig";

function App() {
  return (
    <div className="App">
      <ExportPlacementConfig />
      <hr></hr>
      <ImportPlacementConfig />
    </div>
  );
}

export default App;
