# Next.js의 LifeCycle.md

[<img src="https://pbs.twimg.com/media/C8BX0AAXQAEpYMD?format=jpg"/>](https://pbs.twimg.com/media/C8BX0AAXQAEpYMD?format=jpg)
출처 : https://twitter.com/tpreusse/status/846773290786078721

## React의 LifeCycle

Next.js Client 동작 이후의 라이프싸이클은 React의 라이프 싸이클과 동일합니다.

[<img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1"/>](https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

## [static] getInitialProps

`pages` 디렉토리 아래의 컴포넌트들은 getInitialProps 라는 static method를 가지고 있는지 체크하고, 있을 경우 실행한 결과를 constructor로 전달합니다.  
즉 서버사이드 렌더링의 경우 첫 실행 포인트는 이 메소드가 됩니다.  
하지만 이 메소드는 서버사이드에서만 사용되지 않고, 클라이언트단에서 동작시에도 매번 생성하기 전 이 메소드를 호출합니다.

## constructor

생성자 함수로, 서버사이드에서 연산한 정보를 프론트로 전달받는 중간 다리 역할을 합니다.

## componentDidMount

Next.js Client의 맨 마지막 단계로, 실제 화면에 마운트 된 이후에 동작합니다.  
서버사이드 렌더링에서는 DOM을 렌더하긴 하지만 마운트하지는 않으므로, 이 메소드는 완전히 클라이언트 사이드에서만 동작하는 메소드가 됩니다.  
함수형 컴포넌트의 경우 useEffect 가 이 메소드를 대체하기도 합니다.
