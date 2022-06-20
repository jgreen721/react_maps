import React from "react";
import Flag from "./Flag";

const Flags = ({ flags, setCountry }) => {
  // console.log(flags[(Math.random() * 300) | 0]);
  return (
    <div className="flags-container">
      {flags.map((f) => (
        <Flag
          flag={f}
          key={`{x:${f.latlng[0]},y:${f.latlng[1]}`}
          setCountry={setCountry}
        />
      ))}
    </div>
  );
};

export default Flags;
