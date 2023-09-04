import { UserParams } from "../interface/login.request";
import {
  AuthenticationResponse,
  Authenticator,
} from "../strategy/Authenticator.interface";

// 검증 객체 구조 상속

export class EmailAuthenticator implements Authenticator {
  async authenticate(credentials: UserParams): Promise<AuthenticationResponse> {
    // 구글 로그인 로직 작성부분
    await console.log("email login 성공");
    // 반환값의 객체는 AutenticationResponse 인터페이스로 구조 정의 해놓은것
    return { success: true };
  }
}
