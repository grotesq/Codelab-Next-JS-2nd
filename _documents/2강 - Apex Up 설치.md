# Apex / Up 설치

## Apex

https://apex.run

서버리스 인프라 관리를 해주는 도구  
유사 서비스로는 [AWS SAM(Serverless Application Model)](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/serverless_app.html), [The Serverless Framework](https://github.com/serverless/serverless) 등이 있음.

## Up

Apex에서 제공하는 배포용 도구  
`up.json`을 세팅하면 Apex를 사용하지 않더라도 배포할 수 있음

## 설치

### MacOS, 리눅스의 경우

터미널을 이용해 설치할 수 있다.

```bash
curl -sf https://up.apex.sh/install | sh
```

`version` 명령으로 설치 여부를 확인할 수 있다.

```bash
up version
```

### Windows의 경우

Windows에서는 기본 터미널이나 파워쉘보다 git bash 의 사용을 권장한다.

Github 저장소의 release 페이지에서 다운받을 수 있다.  
https://github.com/apex/up/releases  
압축 해제 후 `up.exe`를 `C:\windows\system32` 경로로 옮긴다.

git bash 상에서 `version` 명령으로 설치 여부를 확인할 수 있다.

```bash
up version
```

### Linux의 경우

Github 저장소의 release 페이지에서 다운받을 수 있다.  
https://github.com/apex/up/releases  
압축 해제 후 `up`을 `/usr/local/bin` 위치로 옮긴다.

```bash
sudo mv ./up /usr/local/bin/
```

터미널 상에서 `version` 명령으로 설치 여부를 확인할 수 있다.

```bash
up version
```
