import "./App.css";
import Info from "./components/info";
import Example from "./components/example";

import StringAdder from "./components/string-adder";

function App() {
  return (
    <div className="container">
      <h1>Incubyte: String Adder</h1>
      <Info />
      <Example />
      <StringAdder />
    </div>
  );
}

export default App;
