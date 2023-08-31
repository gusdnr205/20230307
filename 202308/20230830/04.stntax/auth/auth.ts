import {
  EmailAuthenticator,
  kakaoAuthcenticator,
  AuthProps,
  Login,
  LoginService,
} from "./Authentication";
// I 를 붙이는것은 인터페이스라고 알리는것이다.
interface IEmailsender {
  sendEmail(email: string): void;
}

class Emailsender implements IEmailsender {
  sendEmail(email: string): void {}
}

export interface Strategy {
  email: EmailAuthenticator;
  kakao: kakaoAuthcenticator;
}
class Auth {
  constructor(
    private readonly authporps: AuthProps,
    private readonly emailsender: Emailsender,
    private readonly loginservice: LoginService
  ) {}
  //로그인 로직
  public async login() {
    console.log(this);
    await this.loginservice.login("kakao", this.authporps);
  }
  // 이메일 인증 처리 구조
  public register(): void {
    this.emailsender.sendEmail(this.authporps.email);
  }
}
// 유저의 이메일과 password 임시객체
const authPorps: AuthProps = {
  email: "gusdnr205@naver.com",
  password: "1234",
};
const _emailSender = new Emailsender();
// email 로그인 로직 클래스 동적할당

const _email = new EmailAuthenticator();

//kakao 로그인 로직 클래스동적할당

const _kakao = new kakaoAuthcenticator();

// 로그인 서비스 로직을 가지고있는 객체

const _startegy: Strategy = {
  email: _email,
  kakao: _kakao,
};

const _loginService = new Login(_startegy);
const auth = new Auth(authPorps, _emailSender, _loginService);
auth.login();
