import React, { useState } from "react";

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");

  const search = () => {
    console.log(searchString, "Mandar searchstring a ItemList");
    setSearchString("");
  };

  return (
    <div>
      <input
        value={searchString}
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button src="" alt="" onClick={search}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
