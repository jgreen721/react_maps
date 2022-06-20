import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const CountryInfo = ({
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
    <div className="country-info-card">
      <div className="top-row">
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
      <div className="country-info-columns">
        <div className="country-info-column">
          <div className="bottom-row">
            <img className="flag-info-img" src={flag} alt="flag-img" />
          </div>
        </div>
        <div className="country-info-column">
          {/* <div className="top-row"></div> */}
          <div className="bottom-row">
            <div className="bottom-row-stats">
              <div className="title-row">
                <h1>{name}</h1>
              </div>
              <div className="info-row">
                <div className="info-col">
                  <div className="stats-flex">
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
                </div>
                <div className="info-col">
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
                {/* </div> */}
              </div>
              <div className="info-row">
                <div className="borders-div">
                  {borders?.length && (
                    <>
                      <h4>
                        <span className="bold">Border Countries: </span>
                      </h4>

                      {borders.map((b) => (
                        <div key={b} className="border-div">
                          <h5 className="border-h5">{b}</h5>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
