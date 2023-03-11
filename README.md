## 구글 로그인 해보기

- Axios 러닝가이드 https://yamoo9.github.io/axios/guide/api.html

## 사용방법

### 1. 라이브러리 설치

- yarn create react-app jwtoauth-app
- npm install react-google-login

### 2. 구글 클라이언트 아이디 추가

### 3. 실행

- npm run start

## 참고 & 수정

### 참고

- [원본 애플리케이션](https://github.com/codingspecialist/Springboot-JWT-React-OAuth2.0-Eazy/tree/master/jwtoauth-app)

- [@react-oauth/google Github](https://github.com/MomenSherif/react-oauth)

### 수정 사항

1. Deprecated된 `react-google-login` 대신에, `@react-oauth/google` 사용
2. `<GoogleLogin/>` 은 credential까지 프론트에서 받아서 서버에 제공 vs `useGoogleLogin`은 Authentication Code만 프론트에서 받아서 서버에 제공 ([비교 문서](https://react-oauth.vercel.app/))
