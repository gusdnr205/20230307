// function solution(n) {
//   var answer = [];
//   for (i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       answer.push(i);
//     }
//   }
//   return answer.length;
// }

// solution(100);

// function solution(my_string, n) {
//   var answer = "";

//   for (var i = 0; i < my_string.length; i++) {
//     for (var j = 0; j < n; j++) {
//       answer = answer + my_string[i];
//     }
//   }

//   return answer;
// }

// function solution(my_string) {
//   var answer = "";
//   for (var i = 0; i < my_string.length; i++) {
//     if (
//       my_string[i] == "A" ||
//       my_string[i] == "i" ||
//       my_string[i] == "o" ||
//       my_string[i] == "e" ||
//       my_string[i] == "u" ||
//       my_string[i] == "I" ||
//       my_string[i] == "O" ||
//       my_string[i] == "E" ||
//       my_string[i] == "U" ||
//       my_string[i] == "a"
//     ) {
//       continue;
//     }
//     answer = answer + my_string[i];
//   }
//   return answer;
// }

// function solution(my_string) {
//   var answer = 0;
//   let digits = my_string.split("").map(Number);

//   for (var i = 0; i < digits.length; i++) {
//     if (!isNaN(parseInt(digits[i]))) {
//       answer = answer + parseInt(digits[i]);
//     }
//   }

//   return answer;
// }

// function solution(n) {
//   var answer = 0;
//   if (Number.isInteger(Math.sqrt(n))) {
//     return 1;
//   } else return 2;
// }

// function solution(n, t) {
//   let answer = n;
//   for (let i = 0; i < t; i++) {
//     answer = answer * 2;
//   }

//   return answer;
// }
// solution(2, 10);

function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = new Array(n + 1).fill().map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const values = [6, 10, 12];
const weights = [2, 2, 3];
const capacity = 15;

const maxKnapsackValue = knapsack(values, weights, capacity);
console.log("배낭 문제 최대 가치:", maxKnapsackValue);
