import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = ({ setTab }) => {
  return (
    <div>
      <h1>Ukraine refugee help</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {["list", "map", "+"].map((tab) => (
          <a
            style={{ paddingLeft: 50, paddingRight: 50 }}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setTab(tab);
            }}
          >
            <h2>{tab}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [tab, setTab] = useState("list");
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header setTab={setTab} />

      <iframe
        className="airtable-embed"
        src={
          {
            list: "https://airtable.com/embed/shrqA6OuFVeRfuNLG?backgroundColor=green&viewControls=off",
            map: "https://airtable.com/embed/shrdNs3q9J1mwvOGv/tblp6e2fQk0OwoVYT/viwXagTf2F5hjjnmM?blocks=bli9H5jw8jHK9i8kG&bip=full",
            "+": "https://airtable.com/embed/shrDcbGNWFMKRJZzn?backgroundColor=green",
          }[tab]
        }
        frameborder="0"
        onmousewheel=""
        width="100%"
        style={{ flex: 1 }}
      ></iframe>
    </div>
  );
}

export default App;
