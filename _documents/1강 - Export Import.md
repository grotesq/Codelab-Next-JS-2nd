# Export / Import

- [MDN 링크 - export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)
- [MDN 링크 - import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)

## Import

npm 패키지로 설치한 모듈을 불러올 때엔 이름만 선언해서 가능

```js
import _ from 'underscore';
```

JSX를 사용하려면 항상 React를 import 해야 함

```js
import React from 'react';
```

리액트 네이티브의 기본 컴포넌트는 반드시 import 한 후에만 사용할 수 있음

```js
import { Text, View } from 'react-native';
```

패키지 매니저가 아닌 직접 프로젝트에 추가한 파일들을 불러올 때엔 상대경로를 이용함

```js
import CustomComponent from './CustomComponent'; // 확장명 .js 는 생략
```

## Export

작성한 함수, 상수, 변수, 클래스, 컴포넌트 등을 동일 파일이 아닌 다른 파일에서 이용하려면 export 처리가 필요함

```js
const CustomComponent = () => <Text>Name</Text>
export default CustomComponent;
```

파일명, 컴포넌트명을 일치시키는 것이 관례 (예: `CustomComponent.js`)
