import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";

const SearchBar = ({}) => {
  const [searchString, setSearchString] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      window.location.href = `/ItemSearch/${searchString}`;
    }
  };

  return (
    <div className={style.searchInput__container}>
      <input
        className={style.searchInput}
        value={searchString}
        type="text"
        placeholder="Buscar en Mercado Libre"
        onChange={(e) => setSearchString(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
