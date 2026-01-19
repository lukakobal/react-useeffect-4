import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);

  const renderCount = useRef(0);
  renderCount.current++;

  useEffect(() => {
    setEffectCount((prev) => prev + 1);
  }, [count]);

  return (
    <div className="app">
      <h1>React 64 – render vs useEffect</h1>

      <p>
        <strong>Count (state):</strong> {count}
      </p>
      <p>
        <strong>Render count:</strong> {renderCount.current}
      </p>
      <p>
        <strong>Effect count:</strong> {effectCount}
      </p>

      <button onClick={() => setCount(count + 1)}>Povečaj count</button>
    </div>
  );
}
