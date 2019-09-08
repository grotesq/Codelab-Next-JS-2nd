# up.json 예시

프로젝트 최상위 경로에 `up.json` 파일을 생성하고 다음 내용을 넣는다.

```json
{
  "name": "{name}",
  "profile": "{aws_profile}",
  "regions": ["ap-northeast-2"],
  "lambda": {
    "memory": 256,
    "runtime": "nodejs10.x"
  },
  "proxy": {
    "command": "npm start",
    "timeout": 25,
    "listen_timeout": 15,
    "shutdown_timeout": 15
  },
  "stages": {
    "development": {
      "proxy": {
        "command": "yarn dev"
      }
    }
  },
  "environment": {
    "NODE_ENV": "production"
  },
  "error_pages": {
    "variables": {
      "support_email": "{email}",
      "color": "#2986e2"
    }
  }
}
```