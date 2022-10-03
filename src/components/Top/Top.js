import React from "react";

function Top({data}) {
  return (
    <div>
      <div className="top">
        <div className="location">
          {data.name ? <p>{data.name}</p> : <h1 style={{fontSize: 32, textAlign: 'center'}}>Not search yet</h1>}
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Top;
