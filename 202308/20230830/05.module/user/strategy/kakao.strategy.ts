import { UserParams } from "../interface/login.request";
import {
  AuthenticationResponse,
  Authenticator,
} from "../strategy/Authenticator.interface";

// 검증 객체 구조 상속
// 카카오 로그인 검증 클래스 정의
export class KakaoAuthenticator implements Authenticator {
  async authenticate(credentials: UserParams): Promise<AuthenticationResponse> {
    // 구글 로그인 로직 작성부분
    await console.log("kakao login 성공");
    // 반환값의 객체는 AutenticationResponse 인터페이스로 구조 정의 해놓은것
    return { success: true };
  }
}
