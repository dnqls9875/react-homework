import React from "../lib/react.js";
import Chip from "../components/chip";
import { Tab } from "../scripts/tab";

function App() {
  return React.createElement(
    "nav",
    {
      className: "app-nav",
    },
    React.createElement(
      "ul",
      { role: "tablist" },
      Tab.items.map((item) =>
        React.createElement(Chip, {
          key: item.id,
          label: item.label,
          className: item.id === 1 ? "is--active" : "",
        })
      )
    )
  );
}

export default App;
