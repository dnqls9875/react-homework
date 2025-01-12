import React from "../lib/react.js";
import Chip from "../components/chip";

function App() {
  return React.createElement(
    "nav",
    {
      className: "app-nav",
    },
    React.createElement(
      "ul",
      { role: "tablist" },
      React.createElement(Chip, {
        className: "is--active",
      }),
      React.createElement(Chip, {})
    )
  );
}

export default App;
