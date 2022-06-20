import React, { useEffect, useState } from "react";
import { MenuRow, FilterRow, Flags, Pages, CountryStats } from "./components";
import "./App.css";

function App() {
  const [country, setCountry] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    if (!localStorage.countries) {
      let response = await fetch(`https://restcountries.com/v3.1/all`);
      let data = await response.json();
      setCountries(data);
      localStorage.setItem("countries", JSON.stringify(countries));
    } else {
      setCountries(JSON.parse(localStorage.getItem("countries", countries)));
    }
  }

  const filterRegions = (region) => {
    if (!region) return;
    if (region === "all") {
      setCountries(JSON.parse(localStorage.getItem("countries")));
      console.log("all countries restored");
      return;
    }

    let temp = JSON.parse(localStorage.getItem("countries"));
    console.log("Region", region);
    temp = temp.filter((t) => t.region === region);
    setCountries(temp);
  };

  const filterCountries = (country) => {
    // if (!region) return;
    // if (region === "all") {
    //   setCountries(JSON.parse(localStorage.getItem("countries")));
    //   console.log("all countries restored");
    //   return;
    // }

    let temp = JSON.parse(localStorage.getItem("countries"));
    temp = temp.filter((t) => t.name.common === country);
    setCountries(temp);
  };

  const refreshCountries = () => {
    let temp = JSON.parse(localStorage.getItem("countries"));
    setCountries(temp);
  };

  return (
    <div className="app">
      <MenuRow />
      <FilterRow
        filterCountries={filterCountries}
        countries={countries}
        refreshCountries={refreshCountries}
        filterRegions={filterRegions}
      />
      {!country?.name ? (
        <Flags setCountry={setCountry} flags={countries} />
      ) : (
        <CountryStats
          setCountry={setCountry}
          name={country.name.common}
          population={country.population}
          region={country.region}
          sub_reg={country.subregion}
          capital={country.capital}
          tld={country.tld}
          currency={country.currencies}
          languages={country.languages}
          borders={country.borders}
          flag={country.flags.png}
          nativeName={country.name.nativeName}
        />
      )}

      {/* <Pages /> */}
    </div>
  );
}

export default App;
