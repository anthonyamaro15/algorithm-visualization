import React, { useState, useEffect } from "react";

const SortingAlgo = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    createArrays();
  }, []);

  const createArrays = () => {
    const arr = [];
    for (let i = 0; i < 350; i++) {
      arr.push(Math.floor(Math.random() * (1000 - 5 + 1) + 5));
    }
    setArray(arr);
  };

  console.log("what are therey ", array);

  return (
    <div className="SortingAlgo">
      {array.map((values, i) => (
        <div className="bars" key={i} style={{ height: `${values}px` }}></div>
      ))}
    </div>
  );
};

export default SortingAlgo;
