import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

//refresh select-input more seamlessly

const FilterRow = ({
  countries,
  filterRegions,
  refreshCountries,
  filterCountries,
}) => {
  const [searchCountry, setSearchCountry] = useState("");

  // console.log("CountriesLength", countries.length, countries[0]);
  return (
    <div className="filter-row">
      <div className="search-input-div">
        <span className="search-span">
          <FaSearch />
        </span>
        <input
          list="countrylist"
          onClick={(e) => {
            // refreshCountries();
            setSearchCountry("");
          }}
          placeholder="Search for a country..."
          className="search-input"
          value={searchCountry}
          onChange={(e) => {
            filterCountries(e.target.value);
            setSearchCountry(e.target.value);
          }}
        />

        <datalist id="countrylist">
          {countries.map((c) => (
            <option key={c.name.common} value={c.name.common} />
          ))}
        </datalist>
      </div>
      <div className="region-div">
        <select
          onChange={(e) => filterRegions(e.target.value)}
          name="region"
          id="region"
          className="region-select"
        >
          <option value="">Filter by Region</option>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterRow;
