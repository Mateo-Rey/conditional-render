import "./App.css";
import Loaded from "./Loaded";
import Loading from "./Loading.jsx";
import { useState } from "react";
import { render } from "@testing-library/react";
function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [objectexample, setobjectexample] = useState({
    name: "name of object",
  });
  const [username, setUsername] = useState('')
  const numbers = [1,2,3,4,5,6,7,8,9,0]
  const ternary = isLoaded ? "yes" : "no";
  return (
    <div className="App">
      <h1> Username is:{username || "Guest"}</h1>
      <h1>{
          isLoaded &&
          <>
            {numbers.map((num) => {
              return num*3 + num*2
            })}
            <Loaded/>
          </>
        
        }</h1>
      <button
        onClick={() => {
          setIsLoaded(!isLoaded);
        }}
      >
        Change Loaded
      </button>
    </div>
  );
}

export default App;
