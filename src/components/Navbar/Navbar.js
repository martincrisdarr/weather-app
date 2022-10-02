import React from "react";

function Navbar({location, setLocation, searchLocation}) {
  return (
    
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
    
  );
}

export default Navbar;
