import UserService from "./service/user.service";
import Strategy from "./strategy/strategy";
import { GoogleAuthenticator } from "./strategy/google.strategy";
import { KakaoAuthenticator } from "./strategy/kakao.strategy";
import { EmailAuthenticator } from "./strategy/emilstrategy";
import UserController from "./user.controller";

// 전략 패턴 객체 생성
const strategy = new Strategy();
// 안에 들어있는거
// {strategy:{}, set(),login()}

strategy.set("email", new EmailAuthenticator());
// 이안에담기게된다.
// {strategy:{EmailAuthenticator{authenticate}}, set(),login()}

strategy.set("kakao", new KakaoAuthenticator());
// {strategy:{EmailAuthenticator{authenticate},strategy:{KakaoAuthenticator{authenticate}}, set(),login()}

strategy.set("google", new GoogleAuthenticator());
// ...

// 완성된 객체를 유저버비스 클래스 생서자의 매개변수로 전달 및유저서비스 객체생성

const userService = new UserService(strategy);
// 유저 로그인 로직 클래스 생성및 유저 서비스 로직 객체 생성자 매개변수로 전달

const userController = new UserController(userService);

userController.signin("kakao");
