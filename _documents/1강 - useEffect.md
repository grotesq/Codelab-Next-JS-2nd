# useEffect

참조 : https://ko.reactjs.org/docs/hooks-reference.html#useeffect

컴포넌트가 렌더링 될 때 마다 실행되는 함수입니다.  
클래스형 컴포넌트의 componentDidMount와 componentDidUpdate의 역할을 가집니다.

```js
import React, { useEffect } from 'react';

() => {
  useEffect( () => {
    console.log( 'use effect' );
  } );
  return <div>Content</div>
}
```

두 번째 인자는 배열로, useEffect가 주시할 대상을 설정합니다.  
빈 배열을 전달할 경우 주시할 대상이 없으므로, 첫 마운트 때 한번만 실행되고 이후 더 이상 실행되지 않습니다.  
따라서 componentDidMount와 동일하게 동작하게 됩니다.
