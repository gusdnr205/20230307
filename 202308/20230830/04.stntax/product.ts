// class 를 사요할떄
// 유지보수를 편하게 하기위해서 사용을하는데
// 유지보수가 부족한 코드이다. 확장성이 부족하다.

// 상품의 구조정의
interface IProduct {
  name: string;
  price: number;
}
class Product {
  // private 접근 불가 키워드
  // 직접참조가 안되는값
  private name: string;
  private price: number;
  private discountAmount: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.discountAmount = 0;
  }
  //private 키워드로 직접 참조가안되기떄문에 값을 확인하고싶으면 get메서드를 사용해서 값을 호출한다.
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price - this.discountAmount;
  }
  getProduct() {
    return { name: this.name, price: this.getPrice() };
  }
  // 할인가 조정
  // set 메서드로 할인가 조정
  setDiscountAmount(amount: number): void {
    this.discountAmount = amount;
  }
}

const product = new Product("블록", 1000);

product.setDiscountAmount(100);
console.log(product.getProduct());

// npm init -y
// npm install -D typescript
// npm install -D ts-node
// npx ts-node .\product.ts

// 할인율이 종류가있다고 ㅣㅊ면
// 전략패턴
// 1 할인
// 2 할인
// 3 할인
