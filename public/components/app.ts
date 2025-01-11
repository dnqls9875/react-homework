import React from "../lib/react.js";

function App() {
  return React.createElement(
    "div",
    {
      className: "app",
    }

    // React.createElement(
    //   Box,
    //   {
    //     className: "box--circle",
    //     id: "i'm-box",
    //     "aria-label": "나는 박스다!",
    //     title: "나는 박스다!",
    //     translate: "no",
    //   },
    //   "기본 박스"
    // )
  );
}

export default App;
