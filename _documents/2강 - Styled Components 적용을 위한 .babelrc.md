# Styled Components 적용을 위한 .babelrc 설정

프로젝트의 최상위 경로에 `.babelrc` 파일을 생성하고 다음 내용을 입력한다.

```
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```
