import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExportPlacementConfig from "./components/exportPlacementConfig";
import ImportPlacementConfig from "./components/importPlacementConfig";
import Layout from "./components/Layout";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
    </div>
  );
}

export default App;
