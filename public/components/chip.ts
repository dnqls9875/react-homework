import React from "../lib/react.js";

function Chip() {
  return React.createElement(
    "li",
    { role: "tab" },
    React.createElement(
      "button",
      { type: "button", "aria-label": "탭 버튼" },
      "텍스트"
    )
  );
}

export default Chip;
