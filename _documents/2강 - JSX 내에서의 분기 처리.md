# JSX 내에서의 분기 처리

## return 자체를 분기

```js
() => {
    if( condition ) {
        return <div>Case 1</div>;
    }
    else {
        return <div>Case 2</div>;
    }
}
```

## JSX DOM 내에서 분기

```js
() => (
    <div>
        { condition && (
            <div>Case 1</div>
        ) }
        { !condition && (
            <div>Case 2</div>
        ) }
    </div>
)
```

## JSX DOM 내에서 삼항식을 사용해 분기

```js
// { condition ? () : () } 의 구조임
() => (
    <div>
        { condition ? (
            <div>Case 1</div>
        ) : (
            <div>Case 2</div>
        ) }
    </div>
)
```
