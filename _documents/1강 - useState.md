# useState

함수형 컴포넌트에서 변화하는 상태를 표현하려면 `useState` 훅을 사용

```js
import React, { useState } from 'react';
() => {
    const [ count, setCount ] = useState( 0 );
    return (
        <div>
            <span>{ count }</span>
        </div>
    );
}
```

`useState` 에서 상태 생성시 두번째 값으로 받는 `setCount` 함수를 사용해 값 업데이트

```js
import React, { useState } from 'react';
() => {
    const [ count, setCount ] = useState( 0 );
    return (
        <div>
            <div>{ count }</div>
            <button onPress={ () => setCount( count + 1 ) }>값 증가</button>
        </ddiv>
    );
}
```
