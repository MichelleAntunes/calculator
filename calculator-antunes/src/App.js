import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState([]);
  const clearValue = () => {
    setValue(0);
  };
  const clearLast = () => {
    const newValue = [...value];
    newValue.pop();

    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-4 p-5 justify-center items-center bg-black rounded-sm shadow-2xl shadow-orange-500/80 m-56 text-white w-80 h-80">
      <input
        className="col-span-4 flex justify-center items-center border border-red-700 bg-white text-black"
        id="number"
        placeholder="0123456789"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button
        className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700"
        type="submit"
        onClick={clearValue}
      >
        CE
      </button>

      <button
        className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700"
        type="submit"
        onClick={clearLast}
      >
        =>
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        ,
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        *
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        7
      </button>
      <button class="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        8
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        9
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        -
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        4
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        5
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        6
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        +
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        1
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        2
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        3
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        /
      </button>
      <button className="col-span-1 flex justify-center items-center border border-red-700 hover:bg-red-700">
        0
      </button>
      <button className="col-span-3 flex justify-center items-center border border-red-700 hover:bg-red-700">
        Enter
      </button>
    </div>
  );
}
