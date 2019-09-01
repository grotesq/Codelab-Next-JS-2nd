# 화살표 함수

- [MDN 링크 - 화살표 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/애로우_펑션)

## 특징

1. 익명 함수로만 선언됨
2. 축약 방식 지원
3. this, arguments, super, new.target 을 바인딩 하지 않음
4. 생성자로 사용할 수 없음

## 익명 함수

```js
() => {
    console.log( 'arrow function' );
}

// 익명으로 사용하지 않을 경우 변수에 담아서 사용
const exec = () => {
    console.log( 'arrow function' );
}
```

## 축약 방식 지원

```js
() => {
    return [ 0, 1, 2 ];
}

// 축약식 - 중괄호와 리턴을 생략함
() => [ 0, 1, 2 ];

// 오브젝트 리터럴에 사용하는 중괄호의 경우 괄호로 감싸서 사용 가능
() => ( { key: 'value' } );
```

## this, arguments, super, new.target 을 바인딩 하지 않음

```js
function handler() {
    console.log( this ); // 이벤트 핸들러 등에서는 this가 호이스팅 된 위치를 가리킴
    // 호이스팅: https://developer.mozilla.org/ko/docs/Glossary/Hoisting
}

const handler = () => {
    console.log( this ); // 항상 같은 위치를 가리킴
}
```
