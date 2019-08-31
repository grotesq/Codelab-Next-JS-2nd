# Next.js 앱 생성

## `create-next-app`을 이용한 자동 생성

```bash
npx create-next-app
```

## 수동 생성

npm 패키지 설치

```bash
yarn add next react react-dom
```

`package.json`에 `scripts` 설정

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

`pages/index.js` 파일 생성

```js
function Home() {
  return <div>Welcome to Next.js!</div>
}

export default Home
```

## 실행

```bash
yarn dev
```

정상적으로 실행되면 http://localhost:3000 으로 접속해서 확인
