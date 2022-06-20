import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const CountryStats = ({
  setCountry,
  name,
  population,
  region,
  nativeName,
  sub_reg,
  capital,
  flag,
  tld,
  currency,
  languages,
  borders,
}) => {
  const [native, setNative] = useState();
  const [langs, setLangs] = useState();
  console.log("Country");

  useEffect(() => {
    console.log("borders", borders);

    filterNestedObjects();
  }, []);

  function filterNestedObjects() {
    // find nativeNames and languages

    let nativeTemp = "";
    let temp_langs = "";

    for (let i in nativeName) {
      console.log(i);
      nativeTemp = nativeName[i].common;
    }
    for (let i in languages) {
      console.log(i);
      if (i !== "official") {
        temp_langs += languages[i] + ", ";
      }
    }
    setLangs(temp_langs);
    console.log(languages);
    setNative(nativeTemp);
  }
  return (
    <div className="country-stats-card">
      <div className="stats-top">
        <button
          className="back-btn"
          onClick={() => {
            console.log("clearCountry");
            setCountry({});
          }}
        >
          <FaArrowLeft className="arrow-left" />
          Back
        </button>
      </div>
      <div className="stats-bottom">
        <div className="stat-column flag-column">
          <img src={flag} className="stat-flag" />
        </div>
        <div className="stat-column">
          <div className="stat-data-card">
            <div className="top-row-name">
              <h1>{name}</h1>
            </div>
            <div className="stats-data-row">
              <div className="stats-data-col">
                <h4>
                  <span className="bold">Native Name: </span>
                  {native}
                </h4>
                <h4>
                  <span className="bold">Population: </span>
                  {population}
                </h4>
                <h4>
                  <span className="bold">Region: </span>
                  {region}
                </h4>
                <h4>
                  <span className="bold">Sub Region: </span>
                </h4>
                <h4>
                  <span className="bold">Capital: </span>
                  {capital}
                </h4>
              </div>
              <div className="stats-data-col">
                <h4>
                  <span className="bold">Top Level Domain: </span>
                  {tld}
                </h4>
                <h4>
                  <span className="bold">Currencies: </span>
                  {region}
                </h4>
                <h4>
                  <span className="bold">Languages: </span>
                  {langs}
                </h4>
                <h4>
                  <span className="bold">Capital: </span>
                  {capital}
                </h4>
              </div>
            </div>
            {borders?.length && (
              <div className="borders-stats-div">
                <h4>
                  <span className="bold">Border Countries: </span>
                </h4>
                <div className="borders-grid">
                  {borders.map((b) => (
                    <div key={b} className="border-div">
                      <h5 className="border-h5"> {b}, </h5>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
