import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <Navbar
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <div className="container ">
        <Top data={data} />
        <Bottom data={data} />
      </div>
    </div>
  );
}

export default App;
