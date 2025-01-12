import React from "../lib/react.js";

function removeClass(taregt: HTMLButtonElement): void {
  const buttons = document.querySelectorAll("button");

  // 초기에 class 모두 제거
  buttons.forEach((item) => item.classList.remove("is--active"));

  // 해당 타겟 버튼만 class 추가
  taregt.classList.add("is--active");
}

function Chip(props: { className: string }) {
  return React.createElement(
    "li",
    { role: "tab" },
    React.createElement(
      "button",
      {
        type: "button",
        onClick: (e: Event) => {
          removeClass(e.target as HTMLButtonElement);
          console.log(e);
        },
        "aria-label": "탭 버튼",
        className: props.className,
      },
      "텍스트"
    )
  );
}

export default Chip;

// '함께 성장하는 바른 교육' 이듬(EUID)과 멋쟁이 사자처럼 태킷(Techit) 스쿨이 만났습니다. '이듬' 교육이 지향하는 비전은 동반 성장에 있습니다. 강사에서 수강생으로 한 방향으로 흘러가는 지식 전달이 아닌, 함께 공감하고 이해하며 경험하는 교육 가치를 통해 공동의 혁신을 이끌어내는 것을 목표로 합니다. 멋쟁이 사자처럼 태킷 스쿨은 '함께'의 가치를 중요하게 생각합니다. 5년이 지나도, 10년이 지나도 IT 업계에 필요한 인재를 육성하는 교육을 제공하고, 기업의 HRD 파트너로 존재할 것이며 국내 대표 IT 교육 회사인 만큼 더 좋은 교육이 무엇인지를 끊임없이 고민하는 회사로 자리매김할 것입니다.

// import React from "../lib/react.js";

// function removeClass(targetButton: HTMLButtonElement): void {
//   const buttons = document.querySelectorAll("button");

//   // 초기에 class 모두 제거
//   buttons.forEach((item) => item.classList.remove("is--active"));

//   // 해당 타겟 버튼만 class 추가
//   targetButton.classList.add("is--active");
// }

// function Chip(props: { className: string }) {
//   return React.createElement(
//     "li",
//     { role: "tab" },
//     React.createElement(
//       "button",
//       {
//         type: "button",
//         onClick: (e: Event) => {
//           removeClass(e.currentTarget as HTMLButtonElement);
//         },
//         "aria-label": "탭 버튼",
//         className: props.className,
//       },
//       "텍스트"
//     )
//   );
// }

// export default Chip;
