// src/App.js
import React from "react";
import ColorPicker from "./components/ColorPicker";
import "./components/ColorPicker.css";
import "./App.css"

function App() {
  const colors = ["#fc0101", "#00ff01", "#0000fe", "#ffff00", "#ff00ff", "#00ffff", "#fea500", "#7f017f", "#edaeb9", "#008001", "#fe6347", "#01ced1", "#8b4512", "#ff8b00", "#4682b4", "#fed700"];

  return (
    <div className="App">
      <h1 className="main-heading">Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
