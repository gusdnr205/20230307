# react hook

## useContext 
### 저삭컴포넌트들의 전역 상태 관리를 도와준다.

## useReducer
### 공식문서에 state의 대체 함수라고 나와있음
### 다수의 하위값을 복잡한 로직으로 만드는 경우
### 상태값을 여러가지 사용할 경우 stateqheksms
### Reducer를 사용하는것이 좋다.
### 이전 상태를 다룰경우에도 이점이 있음

## useCallBack
### 메모이제이션 기법을 사용해서 콜백을 반환해준다.
### 컴퓨터가 동일한 연산을 반복할떄 이전연산값을 
### 메모리에 저장하고 반복수행을 줄이는것 (연산의 반복을 제거하는것) 
### 최적화 시키기위해 사용하는 기법
### 실행속도가 빨라진다.

## useMemo 
### 메모이제이션 기법을 사용하는데
### useCallback은 메모이제이션 콜백함수를 반환하고 
### useMemo는 메모이제이션 값을 반환한다.