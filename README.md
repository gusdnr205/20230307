# 20230307
<!-- md 문서 작성 -->
<!-- #제목을 작성해주고 -->
<!-- h1~h5 태그랑 비슷하네 -->

## 123123
### 123123
#### 12312313
##### 12312312321321
###### 1231313123

<!-- 리스트 형태 작성 -->
# git 프로젝트

- git은 뭐냐
1. 형상관리 도구중하나 형상관리 도구: 버전관리 시스템 작업하면서 작업의 리스트를 관리 할수 있다.

- git의 장점
- 협업하는 단계에서 소스코드를 파일로 주고 받을 필요가없이 같은 파일을 팀원과 병렬로 작업이 가능하다.

- 눈으로 보고 찾는거보다 효율이 좋고 작업이 편하다.

- 코드의 다른 부분을 바로 찾을수 있다.

- git 설치 

- git 사용자 설정

- git bash 곰색

- git config --global user.name"본인 깃 닉네임"

- git config --global user.email" 본인 깃 허브이메일"

- git config --global --list

- git 저장소 초기화 저장소를 생성하는 명령어

- 경로지정
- cd . .: 한폴더 뒤로이동
- ls-a 경로의 파일을 전부 보고싶으면

- cd 폴더명 : 해당 폴더로 경로 이동

- cd앞부분 폴더명 쓰고 기억이 안나면 tab 버튼 눌러서 비슷한 폴더명 확인 가능


- 해당프로젝트 경로에서
- git init 


- git graph 설치
- 저장소와 파일의 내용이 다를때 컬러로 표현해준다.

- git 저장소 파일 스테이징
- 얼로드 전 준비 업로드 할 파일들

- git add 해당파일 이름
- git add . : 모든파일 스테이징

- 커밋메시지 작성 
- git commit -m "메시지 내용"


- v파일들을 업로드할 준비 끝
- git remote add origin "연결할 원격 저장소 주소"

- 원격저장소에 업로드
- git push

- 깃을 관리하면서 자리 이동했을때 커밋을 올렸는데 사용자명이 다를 경우 제어판->
 사용자 계정-> 자격증명관리자  -> window 자격증명관리자 -> github.com 열면 나온다 아코디언 박스열어서 제거 버튼 누르고 삭제한후 다시 사용자 등록진행

- 협업을 할때는 git push 부터 날리면 안되고

- a와 b가 잇으면 a가 먼저 push b가 계속 작업을하다가 a의 작업물을 병합하지않고 push를 하게되면 a의 작업물이 다 날아간다.

- .git 파일을 잘못만들었을때 
- rm -rf : 폴더 삭제(ex) rm -rf .git/

- 새로운 환경에서 git 저장소 연결을 할때 따라하세요~
- git init
- git rmote add orgin "저장소의 주소"
- 저장소의 주소는 해당 깃헙의 저장소에 접속해서 code(초록색 버튼)을 누르면 볼수있다.

