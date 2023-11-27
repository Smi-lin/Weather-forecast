import React from "react";
import axios from "axios";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=nigeria&appid=0e7b9138d88f68a2747d4929e038ad0e`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Nigeria</p>
          </div>
          <div className="temp">
            <h1>70°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>70°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
              12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
