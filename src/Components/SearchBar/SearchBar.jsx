import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const SearchBar = ({ history }) => {
  const [searchString, setSearchString] = useState("");

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      history.push(`/ItemSearch/${searchString}`);
      setSearchString("");
    }
  };

  return (
    <div>
      <input
        value={searchString}
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Link to={`/ItemSearch/${searchString}`}>
        <button src="" alt="">
          Buscar
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
