import { UserParams } from "../interface/login.request";
import {
  AuthenticationResponse,
  Authenticator,
} from "../strategy/Authenticator.interface";

// 전략패턴 객체 구조 정의
// 검증 객체 구조 상속
interface Istrategy {
  // key를 문자열로 지정
  // key가 동적으로 추가될수있고 그 키로 추가되는 타입은 Authenticator 이렇게 생긴애가 들어올것이라고 말하는것이다.
  [key: string]: Authenticator;
}

// 서비스 로직들을 가질 객체 구조정의

class Strategy {
  private strategy: Istrategy = {};

  // 서비스 로직을 객체에 추가할 함수.
  public set(key: string, authenticate: Authenticator) {
    // key값을 받고 서비스 로직 추가
    this.strategy[key] = authenticate;
  }
  public async login(
    type: string,
    credentials: UserParams
  ): Promise<AuthenticationResponse> {
    // google, {email, password}
    const result = await this.strategy[type].authenticate(credentials);
    return result;
  }
}

export default Strategy;
