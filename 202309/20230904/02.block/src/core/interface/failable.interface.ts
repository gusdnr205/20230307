// <T> 매개변수화 시키는것
export interface Result<R> {
  isError: false;
  value: R;
}
// 예시
// : Result<string>
// {isError:false,value:"asdsd"}

export interface Faillure<E> {
  isError: true;
  value: E;
}

// 매개변수를 두개 전달한것과 같다 이건 검색좀 해봐야할듯
export type Failable<R, E> = Result<R> | Faillure<E>;
