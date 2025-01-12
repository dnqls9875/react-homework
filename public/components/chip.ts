import React from "../lib/react.js";
import { Tab } from "../scripts/tab";

function removeClass(taregt: HTMLButtonElement): void {
  const buttons = document.querySelectorAll("button");

  // 초기에 class 모두 제거
  buttons.forEach((item) => item.classList.remove("is--active"));

  // 해당 타겟 버튼만 class 추가
  taregt.classList.add("is--active");
}

interface ChipProps {
  label: string;
  className?: string;
}

function Chip({ label, className }): ChipProps {
  return React.createElement(
    "li",
    { role: "tab" },
    React.createElement(
      "button",
      {
        type: "button",
        onClick: (e: Event) => {
          removeClass(e.target as HTMLButtonElement);
        },
        "aria-label": "탭 버튼",
        className: className,
      },
      label
    )
  );
}

export default Chip;
