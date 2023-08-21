<p align="center">
  <img src="./assets/opize-logo.png" width="200px" alt="Opize Calendar2notion" />
</p>
<h1 align="center">opize-design-system</h1>
<h5 align="center">Opize 프로젝트 개발을 위한 디자인 시스템</h5>
<p align="center">
   <a aria-label="npm package" href="https://www.npmjs.com/package/opize-design-system">
    <img alt="" src="https://img.shields.io/npm/v/opize-design-system.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/hyunsdev/opize-design-system/commits/main">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/hyunsdev/opize-design-system.svg">
  </a>
    <a aria-label="license" href="https://github.com/hyunsdev/opize-design-system/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/hyunsdev/opize-design-system.svg" alt="">
  </a>
  <img alt="Language" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---

## Overview

![](/assets/opize-design-system-banner.png)

Opize Design System은 디자인에 대한 고민 대신, 아이디어를 현실로 만들도록 도와주는 Opize의 디자인 시스템입니다.

[Opize Design System Storybook](https://design.opize.me)

## ⚠️ Work In Process - 개발중인 프로젝트

> ⚠️ warn: 최근에 v1 로 업데이트되면서 많은 부분이 달라졌어요. 문서를 잘 확인해주세요.

Opize Design System은 현재 개발중인 프로젝트로, 아직은 이 라이브러리를 사용하는 것을 추천하지 않아요.

0. 컴포넌트의 속성과 타입이 예고 없이 변경될 수 있어요.
1. 해결되지 못한 버그로 인해 치명적인 문제가 발생할 수 있어요.
2. 코드 최적화가 이루어지지 않아 퍼포먼스에 영향을 미칠 수 있어요.
3. 작성 & 보완되지 않은 문서가 존재할 수 있어요.

## Quick Start

### Install

```bash
> npm install opize-design-system styled-components phosphor-react

> yarn add opize-design-system styled-components phosphor-react
```

### Setup

Opize Design System은 내부적으로 Context를 사용합니다. 이에 따라 라이브러리를 사용하기 위해서는 `<OpizeWrapper>` 컴포넌트를 추가해야 합니다.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { OpizeWrapper } from 'opize-design-system';

import App from './App';

ReactDOM.render(
    <OpizeWrapper>
        <App />
    </OpizeWrapper>,
    document.getElementById('root')
);
```

#### In NextJS

-   `Page Router` (pages 폴더가 있는 경우)를 사용하는 경우 `_app.tsx` 파일에 `<OpizeWrapper>` 를 추가해주세요.
-   `App Router` (app 폴더가 있는 경우)를 사용하는 경우 app 폴더 바로 아래의 `layout.tsx` 파일에 `<OpizeWrapper>` 를 추가해주세요.

### Usage

```tsx
import { Button } from 'opize-design-system';

<Button>Button</Button>;
```

#### In NextJS

NextJS의 App Router에서는 점으로 연결된 컴포넌트를 사용할 수 없어요. 이 경우 .을 제외하고 사용해주세요.

```tsx
// 일반적인 React
import { Flex } from 'opize-design-system';

<Flex.Column>...</Flex.Column>;

// NextJS (App Router)
import { FlexColumn } from 'opize-design-system';

<FlexColumn>...</FlexColumn>;
```

## Contact

필요한 기능 요청, 라이브러리에 대한 질문, 구현 방법에 대한 질문 등 어떠한 내용의 연락도 환영합니다.

-   이메일 - Opize: <a href='mailto:hello@opize.me'>hello@opize.me</a>
-   이메일 - Hyuns(개발자): <a href='mailto:hyuns@hyuns.dev'>hyuns@hyuns.dev</a>
-   디스코드: hyunsdev
