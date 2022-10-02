import React from 'react'

function Bottom({data}) {
  return (
    <div>{data.name !== undefined && (
      <div className="bottom">
        <div className="feels">
          {data.main ? (
            <p className="bold">{data.main.feels_like.toFixed()}°F</p>
          ) : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ? (
            <p className="bold">{data.wind.speed.toFixed()} MPH</p>
          ) : null}
          <p>Wind Speed</p>
        </div>
      </div>
    )}</div>
  )
}

export default Bottom