// interface는 객체의 구조를 정의하는 "타입"

interface Iblock {
  id: number;
  title: string;
  content: string;
  date: number;
  like: number;
  // 객체의 구조에서 hit가 없어도 가능한정의 ? 옵션체이닝 사용하묜가능하다
  hit?: number;
}

const Block: Iblock = {
  id: 0,
  title: "제목",
  content: "",
  date: 123,
  like: 123,
  hit: 123,
};

const Block2: Iblock = {
  id: 0,
  title: "제목",
  content: "",
  date: 123,
  like: 123,
};

// 추상
// interface
// class

// implements
// implements 키워드는 class에 구조가 만족하는지 여부 체크

// interface IProduct {
//   name: string;
//   price: number;
// }
// class product implements IProduct {
//   name: string;
//   price: number;
//   constructor(name: string, price: number){
//     this.name=name;
//     this.price=price
//   };
// }
