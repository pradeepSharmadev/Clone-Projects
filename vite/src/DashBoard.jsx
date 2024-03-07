import React, { useEffect, useState } from "react";

function DashBoard() {
  const [color, setColor] = useState("violet");
  const colorsArray = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ];
  const random = Math.floor(Math.random());
  const randomColor = () => {
    setColor(colorsArray[random]);
  };
  return (
    <>
      <div
        className="flex h-screen w-full bg-red-700 items-end justify-center  "
        style={{ background: color }}
      >
        <div className="flex shadow-md font-bold h-14 w-96  justify-around bg-slate-500 mb-20 rounded items-center">
          <div
            onClick={() => setColor("red")}
            className="cursor-pointer text-red-700  bg-slate-100 h-6 w-14 justify-center flex rounded-sm shadow-sm"
          >
            Red
          </div>
          <div
            onClick={() => setColor("green")}
            className="cursor-pointer text-green-700 bg-slate-100 h-6 w-14 justify-center flex rounded-sm shadow-sm"
          >
            Green
          </div>
          <div
            onClick={() => setColor("blue")}
            className="cursor-pointer text-blue-700 bg-slate-100 h-6 w-14 justify-center flex rounded-sm shadow-sm"
          >
            Blue
          </div>
          <div onClick={()=>randomColor()} className=" cursor-pointer w-20 bg-gray-100 h-6 flex justify-center rounded-sm">
            Random
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
