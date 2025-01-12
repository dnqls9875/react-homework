# Components 과제

- [Components 과제](#components-과제)
  - [과제 시작](#과제-시작)
  - [구조 설명 및 과제 과정 설명](#구조-설명-및-과제-과정-설명)

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
![alt text](/public/assets/image_02.png)
