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

  const ternary = isLoaded ? "yes" : "no";
  return (
    <div className="App">
      <h1> Username is:{username || "Guest"}</h1>
      <h1>{
          isLoaded &&
          <>
            this is really Loaded
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
