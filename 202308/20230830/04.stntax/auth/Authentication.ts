// 로그인 가입 관련된 작업
// 카카오, 네이버, 구글

import { Strategy } from "./auth";
export interface AuthProps {
  email: string;
  password: string;
}
interface AuthenticationResponse {
  success: boolean;
  message?: string;
}
interface Authenticator {
  // (검증에 대한 요청 처리)
  authenticate(credentials: AuthProps): Promise<AuthenticationResponse>;
}

// 이메일 로그인 클래스
export class EmailAuthenticator implements Authenticator {
  async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
    // 로직은없다? 요청과 응답 코드가 들어갈부분
    console.log("email login");
    return { success: true };
  }
}

// 카카오 로그인 로그인 로직 클래스

export class kakaoAuthcenticator implements Authenticator {
  async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
    // 카카오 로그인 로직이 들어갈부분
    console.log("kakao login");
    return { success: true, message: "kakao login12" };
  }
}
// 로그인에 대한 서비스를 처리할 클래스 구조
export interface LoginService {
  // 로그인 로직에 대한 함수 구조
  login(type: string, credentials: AuthProps): Promise<AuthenticationResponse>;
}
// 로그인 클래스에 로그인 서비스 구조를 상속받고
export class Login implements LoginService {
  constructor(private readonly strategy: Strategy) {}
  async login(
    type: "kakao" | "email", // typedl Strategy 에서 받아온 타입의 키값으로 바뀜 email or kakao
    credentials: AuthProps
  ): Promise<AuthenticationResponse> {
    // strategy 로그인 로직이 들어있는 객체
    // 여기에서 어떤 로그인 로직으로 처리할지 type 구분해서
    const result = await this.strategy[type].authenticate(credentials);
    return result;
  }
}
