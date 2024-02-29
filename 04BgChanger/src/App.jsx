import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 showdow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=> setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white showdow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button onClick={()=> setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white showdow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button onClick={()=> setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white showdow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button onClick={()=> setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white showdow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button onClick={()=> setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white showdow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button onClick={()=> setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-white showdow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button onClick={()=> setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white showdow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
