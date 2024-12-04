import { useState } from "react";
import { add } from "../utils/string-calculator";

function StringAdder() {
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState("");

  const handleAdd = () => {
    try {
      const sum = add(text);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResult(null);
    }
  };

  return (
    <div className="block">
      <textarea
        className="text-input"
        rows={4}
        placeholder="Enter numbers..."
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>

      {error && (
        <div
          key={error}
          className="result error"
          style={{ backgroundColor: "#ffebee" }}
        >
          <p>{error}</p>
        </div>
      )}

      {result !== null && !error && (
        <div
          key={result}
          className="result success"
          style={{ backgroundColor: "#e8f5e9" }}
        >
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
}

export default StringAdder;
