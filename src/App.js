import "./App.css";
import React, { useState, useEffect } from "react";
import { BsStopWatch } from "react-icons/bs";
function App() {
  const [stopwatchData, setStopwatchData] = useState([
    { id: 0, name: "Timer 1", time: 0,
  isRunning: false, lap: [], time_started: 0,
pause: [] },
  ])
  const [selectedRow, setSelectedRow] = useState(0)
  return (
    <div className="App">
      <div className="container">
        <div className="left">

        </div>
        <div className="right">

        </div>
      </div>
    </div>
  );
}

export default App;