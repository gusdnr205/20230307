// 할인
interface Discount {
  // --------------------  매개변수 반환값
  // 한수만 선언
  getDiscountPrice(price: number): number;
}

// 가격만 수정하는 할인

class FlatDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  getDiscountPrice(price: number): number {
    return price - this.amount;
  }
}
// 할인으로 가격 수정
class PercentDiscount implements Discount {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  getDiscountPrice(price: number): number {
    return price * (1 - this.amount / 100);
  }
}

// 가격도 깍고 할인도 깍고
class FlatPercentDiscount implements Discount {
  private flatamount: number;
  private percnet: number;
  constructor(flatAmount: number, percent: number) {
    this.flatamount = flatAmount;
    this.percnet = percent;
  }

  getDiscountPrice(price: number): number {
    const FlatDiscountAmount = price - this.flatamount;
    return FlatDiscountAmount * (1 - this.percnet / 100);
  }
}

// 할인의 기능에 대한 유지보수가 좋아진다.
// 클래스 하나만 더추가하면 되는것

class Products {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }
}

class ProductDiscount {
  private product: Products;
  private discount: Discount;
  constructor(product: Products, discount: Discount) {
    this.product = product;
    this.discount = discount;
  }
  getPrice(): void {
    console.log(this.discount.getDiscountPrice(this.product.getPrice()));
  }
}

const _product = new Products("mac", 100000);
const _product2 = new Products("windows", 2000);

const productDisCount = new PercentDiscount(10);
const productDisCount2 = new FlatDiscount(1000);
const productDisCount3 = new FlatPercentDiscount(1000, 10);
const productWithDiscount = new ProductDiscount(_product, productDisCount3);
productWithDiscount.getPrice();
