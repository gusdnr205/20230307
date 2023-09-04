// 응답 정보 객체의 구조 정의
import { UserParams } from "../interface/login.request";
export interface AuthenticationResponse {
  success: boolean;
  // message: 옵셔닝 키가 잇어도 되고 업어도 되는구조
  message?: string;
}

// 검증 객체 구조 정의

export interface Authenticator {
  // 로그인 검증을 할 함수선언
  authenticate(credentials: UserParams): Promise<AuthenticationResponse>;
}
