import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  // accion efecto
  // }, [valor observado])

  useEffect(() => {
    console.log("useEffect counter trigger");
    if (counter < 0) {
      setMessage("Counter has negative value");
    } else if (counter < 11) {
      setMessage("Counter has positive value");
    } else {
      setMessage("Counter has up to 10 value");
    }
  }, [counter]);

  useEffect(() => {
    console.log("useEffect message trigger");
    console.log("message has changes");
  }, [message]);

  return (
    <div className="App">
      <h2>Simple useState / useEffect implementation</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
