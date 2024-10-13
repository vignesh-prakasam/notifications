import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-col bg-white w-2/3 h-96 rounded-lg">
          <div className="flex justify-between mt-2 mx-3">
            <div><h1 className="text-left font-bold text-xl">Notifications <span className="size-10 bg-neutral-very-dark-blue ml-2 py-1 px-2 rounded text-white text-sm font-semibold"> 3 </span></h1></div>
            <h1 className="text-left text-neutral-grayish-blue text-sm">Mark all read</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
