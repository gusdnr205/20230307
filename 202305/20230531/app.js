//웹 서비스를 개발을하고 완료되면 배포를 해서 사용자에게 소프트웨어를 전달해야하는데
// 배포를하기위해 필요한게 23자가 접속할수있는 서버 컴퓨터가 필요하다.
// 365일내낸 24켜져있어야하는데

// 서버컴퓨터를 대여해주는 호스팅 업체를 통해 배포를 진행한다.
// 호스팅에는 두가지로 나뉘는데 (서버 호스팅)(웹 호스팅)
// 서버 호스팅: 물리서버를 단독으로 임대및 구매
// 웹호스팅: 서버의 일부 공간을 임대하는 개념(컴퓨터를 잘게 쪼갠거라고 보면됨)
// 웹호스팅의 장점 서버나 은프라 구축이 필요없고 비용이저렴하드느 장점
// 단점은 웹호스팅은 자원이 한정적 단독서베에 비해 사용량이 제한적이라는단점.

// 웹호스팅 업체중 하나인 aws 통해서 서브를 배포 할것.

// iass : 컴퓨터 자원만 제공하는 형태 (aws) infrastucture as as service
// pass : 헤로쿠 등 넷플리파이 등등 기존환경에서 서비스를 올려주는 형태

// 인스턴스 만들기 전에 오른쪽 상단에 리전확인 서버컴퓨터가 가깝게 설정
// 인스턴스 사용 운영체제 선택
// 우리가 사용할 os는 우분투 프리티어
// 키페어 잘보관 하자 혹시나 전달할 경우 저장매체 usb사용

// ssh TCP 프로토콜 포트 범위 22 기본으로 가지고있는 디폴트 포트라고 생각하면된다.
// 인스턴스에 접근하기위해 
// 보안 그룹 설정 hhtp https mysql

//인스턴스에 mysql 설치 
// mysql 설치 명령어
//djqepdlxm
// sudo apt-get update
// sudo apt-get install mysql-server

// 데이터베이스 세팅
// 우리가 사용할 데이터베이스 하나 만들어보자
// 쿼리문 그대로 사용해서 만들자

//create database 이름 ;
// show databases;

// 데이터베이스를 사요할때 우리가 사용할 윶를 만들어주자
// 사용할 유저 생성 
// create user '여기에 유저이름'@'%' identified by '여기에 사용할 비민번호';
// ex) create user 'admin'@'%' identified by 'admin1234';

// 만든 유저에게 권한설정
// grant all on 데이터 베이스 이름.(데이터베이스 이름뒤에 점)* to 'username'@'%';
// ex) grant all on test.* to 'admin'@'%';

// 권한이 주어졌는지 확인
// show grants for'여기 유저 이름';
// 예) show grants for 'admin';

// 외부에서 인스턴스의 mysql 에접속을해보자

//sudo service mysql restart;

// mysql -u admin -p
// admin1234

// 보안그룹에 mysql을 허용해놓음 이미
// mysql 외부 접근허용

//sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;
// 파일을 열고 i 눌러서 수정모드 진입
// esc 눌러서 풀고
//:wq! 저장후 종료
//:q!: 종료
//:w!: 강제정장

// 프로젝트를 설치받자
// git에 올린다음

// 포트 포워딩을 해서 포트 80 http 로 접속했을때 8080포트로 재 매핑 시켜주자
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;
// --dport 80 접속했을때 --to-port 8080 이포트로 재매핑
// 포트포워딩 확인 명령어
// sudo iptables -t nat -L --line-numbers

// 포트 포워딩 삭제 명령어
// sudo iptables -t nat -D PREROUTING 인덱스 번호/

//http 80번포트
// https: 443포트

//그리고 서버대기가 종료되는데
// 백그라운드에서 서버를 대기 시켜서 계속 동작하게
// pm2 설치
// npm i pm2 
// package.json 부분에서 실행스크립트 명령어를 node app.js로 실행했을텐데
// pmt2 start app.js로 수정하면된다.
// 서버가 종료되어도 백그라운드에서 노드서버실행
// 서버종료는 npx pm2 kill : 종료
// 리스트 확인 npx pm2 list : 리스트

// vi package.json