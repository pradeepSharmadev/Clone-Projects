import React, { useState } from "react";

function Background() {
  let [color, setColor] = useState("violet");
  return (
    <>
      <div
        className="container flex h-screen  w-full"
        style={{ backgroundColor: color }}
      >
        <div className="btns flex">
          <div onClick={() => setColor("red")} className="btn1">
            Red
          </div>
          <div className="btn2">Green</div>
          <div className="btn3">Blue</div>
          <div className="btn4">Random</div>
        </div>
      </div>
    </>
  );
}

export default Background;
