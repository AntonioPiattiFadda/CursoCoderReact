import React, { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div>ConsumiendoApis</div>;
};

export default ConsumiendoApis;
