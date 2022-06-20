import React from "react";

const Flag = ({ flag, setCountry }) => {
  return (
    <div onClick={() => setCountry(flag)} className="flag-div">
      <div className="flag-img-div">
        {/* <h1 className="flag">{flag.flag} </h1> */}
        <img className="flag-img" src={flag.flags.png} alt="arms" />
      </div>
      <div className="flag-stats-div">
        <h4 className="flag-h3">{flag.name.common}</h4>
        <h5 className="flag-h5">Population:{flag.population}</h5>
        <h5 className="flag-h5">Region:{flag.region}</h5>
        <h5 className="flag-h5">
          Capital:{flag.capital?.length && flag.capital[0]}
        </h5>
      </div>
    </div>
  );
};

export default Flag;
