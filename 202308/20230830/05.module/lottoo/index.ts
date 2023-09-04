// Define the strategy interface
interface RandomNumberStrategy {
  generateRandomNumber(): number;
}

// Implement different strategies
class SimpleRandomNumberStrategy implements RandomNumberStrategy {
  generateRandomNumber(): number {
    return Math.random();
  }
}

class IntegerRandomNumberStrategy implements RandomNumberStrategy {
  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
}

// Context that uses the strategy
class RandomNumberGenerator {
  private strategy: RandomNumberStrategy;

  constructor(strategy: RandomNumberStrategy) {
    this.strategy = strategy;
  }

  generateRandomNumber(): number {
    return this.strategy.generateRandomNumber();
  }
}

// Usage
const simpleStrategy = new SimpleRandomNumberStrategy();
const integerStrategy = new IntegerRandomNumberStrategy();

const simpleGenerator = new RandomNumberGenerator(simpleStrategy);
const integerGenerator = new RandomNumberGenerator(integerStrategy);

console.log("Simple Random Number:", simpleGenerator.generateRandomNumber());
console.log("Integer Random Number:", integerGenerator.generateRandomNumber());
