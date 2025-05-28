import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-80 rounded border bg-white p-2 shadow-lg">
        <input
          value={display}
          id="display"
          type="text"
          className="mb-4 h-10 w-full rounded border text-right"
          readOnly
        ></input>
        <div className="grid grid-cols-4 gap-2">
          <button
            key={"7"}
            onClick={() => handleClick("7")}
            className="rounded border hover:bg-gray-200"
          >
            7
          </button>
          <button
            key={"8"}
            onClick={() => handleClick("8")}
            className="rounded border hover:bg-gray-200"
          >
            8
          </button>
          <button
            key={"9"}
            onClick={() => handleClick("9")}
            className="rounded border hover:bg-gray-200"
          >
            9
          </button>
          <button
            key={"C"}
            onClick={() => handleClick("C")}
            className="rounded border bg-red-400 hover:bg-red-500"
          >
            C
          </button>

          <button
            key={"4"}
            onClick={() => handleClick("4")}
            className="rounded border hover:bg-gray-200"
          >
            4
          </button>
          <button
            key={"5"}
            onClick={() => handleClick("5")}
            className="rounded border hover:bg-gray-200"
          >
            5
          </button>
          <button
            key={"6"}
            onClick={() => handleClick("6")}
            className="rounded border hover:bg-gray-200"
          >
            6
          </button>
          <button
            key={"+"}
            onClick={() => handleClick("+")}
            className="rounded border hover:bg-gray-200"
          >
            +
          </button>

          <button
            key={"3"}
            onClick={() => handleClick("3")}
            className="rounded border hover:bg-gray-200"
          >
            3
          </button>
          <button
            key={"2"}
            onClick={() => handleClick("2")}
            className="rounded border hover:bg-gray-200"
          >
            2
          </button>
          <button
            key={"1"}
            onClick={() => handleClick("1")}
            className="rounded border hover:bg-gray-200"
          >
            1
          </button>
          <button
            key={"-"}
            onClick={() => handleClick("-")}
            className="rounded border hover:bg-gray-200"
          >
            -
          </button>

          <button
            key={"="}
            onClick={() => handleClick("=")}
            className="rounded border bg-green-400 hover:bg-green-500"
          >
            =
          </button>
          <button
            key={"0"}
            onClick={() => handleClick("0")}
            className="rounded border hover:bg-gray-200"
          >
            0
          </button>
          <button
            key={"*"}
            onClick={() => handleClick("*")}
            className="rounded border hover:bg-gray-200"
          >
            *
          </button>
          <button
            key={"/"}
            onClick={() => handleClick("/")}
            className="rounded border hover:bg-gray-200"
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}
