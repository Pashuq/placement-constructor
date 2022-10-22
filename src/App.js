import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Layout/Header";

const dat3 = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    '{"table": "table1", "imgUrl" : "assets/tables/table-1.jpeg", "sizeY": "3", "sizeX": "3", "currentElCoords" : "12-7"}',
    '{"disabled":"true"}',
    '{"disabled":"true"}',
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    '{"disabled":"true"}',
    '{"disabled":"true"}',
    '{"disabled":"true"}',
  ],
  [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    '{"disabled":"true"}',
    '{"disabled":"true"}',
    '{"disabled":"true"}',
  ],
];

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
    </div>
  );
}

export default App;
