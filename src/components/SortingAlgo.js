import React, { useState, useEffect } from "react";

const SortingAlgo = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    createArrays();
  }, []);

  const createArrays = () => {
    const arr = [];
    for (let i = 0; i < 350; i++) {
      arr.push(Math.floor(Math.random() * (700 - 5 + 1) + 5));
    }
    setArray(arr);
  };

  const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }

    return result;
  };

  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
  };

  const mergeSortFunc = () => {
    let sortArr = mergeSort(array);
    setArray(sortArr);
  };

  return (
    <div className="SortingAlgo">
      {array.map((values, i) => (
        <div className="bars" key={i} style={{ height: `${values}px` }}></div>
      ))}
      <button onClick={mergeSortFunc}>merge sort</button>
    </div>
  );
};

export default SortingAlgo;
