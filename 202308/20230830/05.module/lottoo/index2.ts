// 랜덤으로 숫자를 뽑아주는 interface 하나
// 번홀를 몇개뽑아줄지 정해주는거 하나
// 랜덤 범위 정해주는거 하나?

// 어떤 데이터를 반환할지 함수는 몇개 사용할지만 정하고 그안의 형태는 정하지않음
interface randomizedNumber {
  index?: number;
  realNum: number;
}
// 범위 지정
interface rangeofnumgen {
  rangeofnumgen(): number;
}
// 배열생성
interface arrayRandomNum {
  generateRangeOfNumbers(): randomizedNumber[];
}
// 랜덤숫자 뽑아주는놈

class rangeofnumgen implements rangeofnumgen {
  index: number;
  constructor(userselect: number) {
    this.index = userselect;
  }
  rangeofnumgen(): number {
    return this.index;
  }
}

class arrayRandomNumgen implements arrayRandomNum {
  private length: number;
  private asd: rangeofnumgen;
  constructor(num: rangeofnumgen) {
    this.length = 5;
    this.asd = num;
  }
  generateRangeOfNumbers(): randomizedNumber[] {
    console.log("이것은 함수 이다 ", this.asd.index);
    const generatedNumbers: randomizedNumber[] = [];
    for (let i = 0; i < this.asd.index; i++) {
      // randomizedNumber 객체를 생성하거나 필요한 로직을 여기에 추가합니다.
      const randomNumber: randomizedNumber = {
        index: i,
        realNum: Math.random(),
      };

      generatedNumbers.push(randomNumber);
    }

    return generatedNumbers;
  }
}

class realGenerator {
  private startegy: arrayRandomNum;
  constructor(startegy: arrayRandomNum) {
    this.startegy = startegy;
  }

  generateRangeOfNumbers(): randomizedNumber[] {
    console.log("generating range of numbers");
    return this.startegy.generateRangeOfNumbers();
  }
}

const arraylengthselector = new rangeofnumgen(10);
const justonegenerator = new arrayRandomNumgen(arraylengthselector);

const realone = new realGenerator(justonegenerator);

console.log(realone.generateRangeOfNumbers());
