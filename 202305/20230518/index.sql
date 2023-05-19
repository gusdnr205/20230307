-- 데이터 베이스
-- 단순하게 데이터를 저장하는 공간으로 보면되고


-- sql 명령어를 사용해서 
-- 구현된 기능을 실행시키기위해 사용하는 특정한 언어이다.
-- 데이터를 보관허가나 저장하거나 삭제 또는 수정을 할수있다.

-- 관계형 데이터베이스
-- mysql 
-- oracle
-- mariaDB
-- 스키마 차이가있다?

-- 비관계형 데이터베이스
-- mongodb

--CLI 로 mydwl에 접속방법
-- mysql  -u -root - p
-- 비밀번호 입력

-- show databases
-- 스키마 전부확인

-- sql문은
-- 데이터 정의어 (ddl)
--데이터 조작어 (dml)
--데이터 제어어(dcl)

--데이터 정의어
--create
--show
--drop
--alter

-- 데이터베이스 만들어보자
CREATE DATABASE testmysql;

SHOW DATABASES;

DROP DATABASE testmysql;

--사용할 데이터베이스 지정
USE testmysql;

-- 데이터 베이스 안에있는 테이블확인
SHOW TABLES;

-- 테이블 생성
-- 테이블에 PRIMARY KEY : 고유키는 한개만 들어갈수있고 중복이 되지않는값
CREATE Table store(
    id INT AUTO_INCREMENT PRIMARY KEY,
    tel VARCHAR(20)
);

-- 테이블에서 필드명과 타입을 확인할수있는 명령어 
DESC STORE;

-- 데이터 타입
-- 숫자형, 문자형 ,날짜형 ,이진데이터 타입

--숫자형
--INT : 4byte -21억-

--문자형 
-- VARCHAR : 255byte : 기변데이터(우리가 선언한 범위보다 작으면 자기가 알아서 맞춰준다 )
-- CHAR : 255byte : 고정데이터 (우리가 선언한 범위를 다 먹는다.)
-- TEXT : 65545 byte

-- 날짜형
-- DATE : 년원일 
-- TIME : 시간
-- DATETIME : 년원일 시간 (yyyy-mm--dd)
-- TIMESTAMP : 년월일 시간 (integer) 4byte

--이진데이터
--blob : 데이터

--PRIMARY KEY : 중복입력 x 테이블에 하나만 넣을수있다. null값도 안된다.ADD
--unique : 중복 입력 불가인데 키를 여러개줄수있다. null값도 된다.ADD

CREATE Table user(
    user_id VARCHAR(20) PRIMARY KEY,
    -- not null 빈값이 들어가면안됌
    user_pw VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    -- Default  따로 추가한 값이 없으면 기본값을 지정해준다.
    gender CHAR(4) DEFAULT "남자",
    date DATETIME DEFAULT now()
);

DESC USER;

--데이터 조작어
-- SELECT
-- INSERT
-- UPDATE 
-- DELETE
-- 테이블에 값을 추가
-- INSERT INTO : 얘네는 짝궁
INSERT INTO user(user_id,user_pw,user_name,gender)VALUES("user2","1234","hee",'여자');

SELECT * FROM user;

-- 고유키를 안넣어주면 안됨 not null 도 마찬가지
-- INSERT INTO user(user_id,user_pw, user_name)VALUES("user3","123","hee");

-- [테이블 열 검색]
-- WHERE 문으로 테이블 조회해서 해당 필드가 user2 인 값을 찾아서 조회
SELECT * FROM user WHERE user_id="user2";
SELECT * FROM user WHERE gender="남자";

-- [테이블 열 수정]
-- SET : 해당 값을 수정할때 사용
-- UPDATE문과 짝으로 사용한다
UPDATE user SET gender="남자" WHERE user_id = "user1";

UPDATE user SET user_pw="0000", user_name="hee", gender="여자" WHERE user_id="userid2";

-- [테이블 열 삭제]
DELETE FROM user WHERE user_id="userid1";




-- 게시판 테이블 한번 만들기 
-- 이름은 boarder
-- 컬럼은 id, content, wirter ,date , likes
-- id = INT 11자 자동으로 증가 고유키
-- content TEXT 타입 null 이어도 추가 가능하게
-- writer VARCHAR 40자 null 되면 안되게
-- like int 11자 기본값 0 ADD

-- row를  6개 추가하기 

CREATE TABLE boarder (id INT(11) AUTO_INCREMENT PRIMARY KEY,contents TEXT,writer VARCHAR(40)NOT NULL,
likes INT DEFAULT 0,    date DATETIME DEFAULT now());

DROP TABLE boarder;
SHOW TABLES;

DESC boarder;

INSERT INTO boarder(contents,writer,likes)VALUES("asds","asd",0);

SELECT id,likes FROM boarder;

SELECT *FROM boarder WHERE id=1;


-- mysql -u root - p : cli환경에서 mysql접속
-- create database [데이텁 에이스 이름] : 데이터베이스 생성 엑셀파일 생성같은 의미
-- drop databae 데이터베이스 이름 : 데이터베이스 삭제
-- create table [테이블 이름] ([필드명 데이터 타입],...)  : 테이블 생성
-- show DATABASE : 모든 데이터 베이스 조회
-- show tables : 모든 테이블 조회
-- use [데이터베이스이름] : 사용할 데이터 베이스 선택 엑셀파일 열기
-- desc [테이블 명] : 테이블의 필드를 한줄로 화긴(엑셀과 비교]
-- select 필드1,필드2 from 이런경우는 선택한 필드만 조회가능 *일경우 모든 필드를 불러온다
-- DELETE FROM [테이블 이름] WHERE [필드]= "값" : 테이블에 필드가 == 값인 친구를 삭제
-- select *from [테이블 이름] : 테이블 전체 값을 조회 
-- insert INTO [테이블이름] (필드1,필드2)values(필드1의 값, 필드2의 값),(필드1의 값, 필드2의 값),(필드1의 값, 필드2의 값),
-- 위와 같은형태로도 가능하다. 

-- UPDATE [테이블 이름]SET [필드명] = "수정할 값" [필드명2] = "수정할값2" WHERE 필드 = "값" : 테이블 명에서 필드명을  새로운 값 => 새로운 값과 새로운 값2 로 바꾼다.users
-- SELECT *FROM [테이블명] WHERE [필드] like "%AB" : 필드에 해당되는 내용중 AB로 시작하하는 데이터 조회
-- ADD                                  %로시작 
-- SELECT *FROM [테이블명 ] WHERE [필드] like "AB%" : 필드에 해당되는 내요중 ~AB 로 끝나는 데이터조회
-- ALTER TABLE [기존 테이블명] RENAME [새로운 테이블 이름] ㅣ 테이블 이름바꾸기
-- ALTER Table [테이블명] RENAME [dd] 
-- ALTER TABLE [테이블 이름] CHANGE [기존 컬럼이름][새로운 컬럼이름] type: 컬럼의 이름 바꾸기
-- ALTER TABLE [테이블 이름] MODIFY [컬럼이름] TYPE: 컬럼의 타입을 변경

-- DELETE FROM [테이블 이름] WHERE [필드값] ="값" : 조건에 맞는 모든 값 삭제 
-- ALTER TABLE [테이블 이름] DROP [필드이름] : 해당 필드를 테이블에서 저가한다.
-- ALTER TABLE [테이블 이름] AUTO_INCREMENT = 0.1: 해당 테이블의 AUTO_INCREMENT 를 초기화 시켜준다.
-- ALTER TABLE [테이블 이름] ADD [필드이름] TYPE: 해당 테이블 맨뒤로 필드를 추가한다 
-- ALTER TABLE [테이블 이름] ADD [필드이름] TYPE FIRST: 해당 테이블 맨앞에 필드를 추가한다 


CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY key,
    name VARCHAR(20)
);

CREATE TABLE post(
    id INT AUTO_INCREMENT PRIMARY key,
    name VARCHAR(20)
);
DROP TABLE user;
SHOW TABLES;
-- post 테이블에 userID 키추가 타입은 int
ALTER TABLE post ADD COLUMN userID INT;

DESC user;
DESC post;
-- ADD CONSTRAINT 제약조건 명령어 (오류가 나면 확인하기위해서 ) (임의로 지정할수있다.)
-- FOREIGN KEY : 참조키로 지정 userID
-- REFERENCES 참조키가 참조하는 테이블의 열을 지정
-- 참조할 테이블 지정 user로
ALTER Table post ADD CONSTRAINT fk_user FOREIGN KEY(userID) REFERENCES user(id);

INSERT INTO user (name)VALUES("d");
INSERT INTO post(name,userID)VALUES("1",1);

-- INNER JOIN 테이블을 조회하는데 참조키를 가지고 관꼐가 맺어져있는 테이블 조회
SELECT * FROM user INNER JOIN post on user.id = post.userID WHERE user.id=1;


SELECT user.id, post.name FROM user INNER JOIN post on user.id = post.userID WHERE user.id=1;

-- 오늘 잠시 간단하게 만들어볼거 
-- 게시판 만들었는데 유저가 글을 등록하고 해당 유저가 작성한 유저가 작성한 글을 작성한 글을 볼수있는페이지

