**<div style="font-size:40px">Compoents 과제</div>**
<br>

**목차**

- [과제 시작](#과제-시작)
- [구조 설명 및 과제 과정 설명](#구조-설명-및-과제-과정-설명)
  - [App Components](#app-components)
  - [Chip Components](#chip-components)
- [코드 리팩토링](#코드-리팩토링)
  - [tab.ts](#tabts)
  - [Chip Components 최종 코드](#chip-components-최종-코드)
  - [App Components 최종 코드](#app-components-최종-코드)
- [과제 후 느낀점](#과제-후-느낀점)

## 과제 시작

이번 과제는 수업 시간에 나가지 못한 컴포넌트를 최소 1개 만들어보는 과제이다. 3가지 유형이 있었지만 타입스크립트를 이용해 컴포넌트를 만들고, props를 전달하는 과정이 나한테는 이번 수업이 처음이라 복습을 한다는 생각으로 간단한 컴포넌트 생성 해볼 계획이다.

<hr>

## 구조 설명 및 과제 과정 설명

```jsx
public/
├── components/
│   ├── app.ts
│   └── chip.ts
```

일단 pubilc 폴더 안에 components폴더를 만들고 그 안에 app.ts, chip.ts를 만들었다.
먼저 설명을 하기 전

```jsx
import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import App from "../components/app";

const root = document.getElementById("react");

if (!root) {
  alert("문서에 #react 요소가 존재하지 않습니다.");
} else {
  ReactDOM.createRoot(root).render(React.createElement(App));
}
```

index.html에 `react`라는 `id`를 찾고, 그 안에 `App` 컴포넌트 리액트 요소를 렌더링 `main.ts`에서 진행하고 있다.

`app.ts` 파일에서 `App` 컴포넌트가 하는 일은 컴포넌트를 쌓는 일을 하고 있다. 난 `Chip` 컴포넌트를 `App` 컴포넌트 안에 렌더링 할 것이다.

![alt text](/public/assets/image_01.png)

일단 **HTML**구조를 `nav > ul > li > button` 의 구조로 마크업 하였다.

### App Components

```jsx
function App() {
  return React.createElement(
    "nav",
    {
      className: "app-nav",
    },
    React.createElement(
      "ul",
      { role: "tablist" },
      React.createElement(Chip, {}),
      React.createElement(Chip, {})
    )
  );
}
```

이렇게 작성하면 App 컴포넌트에서 nav, ul의 ReactElement는 생성했고, 이제 ul안에 Chip이라는 컴포넌트를 삽입할 계획으로 코드를 짰다. 그래서 `React.createElement(Chip, {})` 추가를 시키면 `li > button`이 추가가 되게 작업하였다.

### Chip Components

```jsx
import React from "../lib/react.js";

function activeClass(targetButton: HTMLButtonElement): void {
  const buttons = document.querySelectorAll("button");

  // 초기에 class 모두 제거
  buttons.forEach((item) => item.classList.remove("is--active"));

  // 해당 타겟 버튼만 class 추가
  targetButton.classList.add("is--active");
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
          activeClass(e.currentTarget as HTMLButtonElement);
        },
        "aria-label": "탭 버튼",
        className: props.className,
      },
      "텍스트"
    )
  );
}

export default Chip;
```

이 코드에 대해 설명하자면 `li, button` 리액트 요소를 생성했고, `li`의 속성으로 `role` 값을 추가하였다. 또 `button`은 클릭 이벤트 속성을 추가했고, `is--active`라는 class를 제거, 추가 하는 함수를 전달하였다. `props` 값으로 `className`을 생성해 문자로 된 `className`을 전달해 `App` 컴포넌트에서도 사용하였다.

사실 만드는데 큰 어려움은 없었지만 타입스크립트로 실습 경험이 많이 부족하다 보니 자바스크립트에서 사용했던 class 제거 추가 함수를 생성하고, 타입을 지정하는데 약간의 어려움이 있었던 것 같다. 그래도 수업 때 배운 타입인 `HTMLButtonElement, Event, as를 사용한 타입 단언` 등을 떠올려 해결하였다.

<hr>

## 코드 리팩토링

![alt text](/public/assets/image_02.png)

코드를 작성하고 나니 `button`에 들어가는 text가 "텍스트"라는 단어로 고정되어 있고, 일일히 텍스틀를 추가해줘야 하는게 컴포넌트 사용적 측면에서 좋지 못한 방향인 거 같아 변경을 하려고 하였는데 마침 비슷한 컴포넌트로 바닐라 프로젝트에서 사용했던 tab ui가 있어 이런식으로 작업하기 위해 코드를 수정하였다.

### tab.ts

```jsx
export enum TabText {
  NEARDY = "가까운 순",
  RESERVATION = "예약",
  ORDER = "주문",
  USED = "사용완료",
  EXPIRATION = "기간만료",
}

export const Tab = {
  items: [
    { id: 1, label: TabText.NEARDY },
    { id: 2, label: TabText.RESERVATION },
    { id: 3, label: TabText.ORDER },
    { id: 4, label: TabText.USED },
    { id: 5, label: TabText.EXPIRATION },
  ],
};
```

tab.ts를 만들어 `TabTexts`로 탭에 해당하는 텍스트를 관리하는 `enum`을 추가하고, 아래는 Tab 객체에 `items`라는 배열에 `id`값과, `label` 값을 추가해주었고, `label`은 `TabText` `enum`에서 불러왔다.

### Chip Components 최종 코드

```jsx
import React from "../lib/react.js";

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

```

기존 코드에서 `label`과 `className` `props`로 받아와야 하는데 이 부분을 `interface`을 추가해 객체 구조분해 할당 해주어 `className`과 `label`이라는 속성을 가져와 사용했다.

### App Components 최종 코드

```jsx
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
```

기존 ` React.createElement(Chip, {})` 부분을 tab.ts의 내용을 불러와야하므로 `Tab`으로 별칭해주었고, `Tab`안에 `items` 배열에 접근해 `map` 메서드를 돌려 `Chip` 컴포넌트를 생성하는 코드를 작성했다. `Chip` 컴포넌트에서 사용한 `label` 속성을 활용하여 `label: item.label`을 사용하였고, `className` 속성을 활용하여 `item.id`가 `1`인 경우에 초기 렌더링 화면에 활성화된 class로 지정해주었다. `key값을` 지정해주지 않으니 아래와 같은 경고 메시지가 생겼다. React에서는 `map`을 사용할 때 자식 컴포넌트가 고유한 `key`를 가져야 한다는 경고인데 기능적으로 문제가 없었지만 거슬려서 `key값을` `items`의 `id`로 지정해주니 아래와 같은 경고가 사라졌다.

![alt text](/public/assets/image_03.png)

## 과제 후 느낀점

일단 가벼운 마음으로 컴포넌트를 생성해 렌더링 하는것 까지는 별 무리 없었던 것 같다. 하지만 기능을 추가하면서 `typescript`에 조금 미흡한 부분으로 시간이 지체되었지만 해결 할 수 있어 좋았고, 타입스크립트 공부를 좀 더 보완해야겠다고 느꼈다. 그리고 기능을 추가하고 나서 스스로 작업물에 만족하여 그만하려고 했지만 **재사용성** 이라는 관점에서 다시 한번 코드를 확인하니 **재사용성**에서 좀 좋지 못한 코드였던 거 같아 코드를 수정 및 보완했고, 수업 때 배운 내용 참고하여 파일을 분리하고, 속성, 값 들을 가져오고 하는 부분에서 이번 과제로 인해 도움이 많이 되었던 것 같다.
