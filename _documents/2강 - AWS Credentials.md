# AWS Credentials

## AWS CLI를 통한 설정

```bash
# 기본 계정
aws configure

# 특정 프로젝트 계정
aws configure --profile={name}
```

## 직접 수정

홈 디렉토리 아래에 `.aws` 디렉토리를 만든 후 그 아래에 `credentials` 파일을 만들어 직접 입력한다

```
[default]
aws_access_key_id={key}
aws_secret_access_key={key}
region=ap-northeast-2

[name]
aws_access_key_id={key}
aws_secret_access_key={key}
region=ap-northeast-2
```