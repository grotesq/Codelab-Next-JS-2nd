# React.Fragment

JSX DOM 상에는 존재하지만 실제 결과물에는 렌더링 되지 않는 가상의 태그

```js
import React from 'react';

// render 함수 내에서
<ul>
  <React.Fragment>
    <li>...</li>
    <li>...</li>
    <li>...</li>
  </React.Fragment>
</ul>
```

실제 렌더링 결과

```html
<ul>
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ul>
```
