// function findOptimalSolution(n, weights, x) {
//   // Initialize best array with values [n + 1, 0] for all states s
//   const best = new Array(1 << n).fill().map(() => [n + 1, 0]);

//   for (let s = 1; s < 1 << n; s++) {
//     best[s] = [n + 1, 0];

//     for (let p = 0; p < n; p++) {
//       if (s & (1 << p)) {
//         const option = [...best[s ^ (1 << p)]];

//         if (option[1] + weights[p] <= x) {
//           option[1] += weights[p];
//         } else {
//           option[0]++;
//           option[1] = weights[p];
//         }

//         best[s] = best[s].map((value, index) => Math.min(value, option[index]));
//       }
//     }
//   }

//   return best[(1 << n) - 1];
// }

// // Example usage:
// const n = 5; // Number of elements
// const weights = [2, 3, 4, 5, 6]; // Array of weights
// const x = 10; // Maximum weight limit
// const result = findOptimalSolution(n, weights, x);
// console.log("Minimum groups:", result[0]);
// console.log("Total weight:", result[1]);
// console.log("result", result);
// function solution(a, b, g, s, w, t) {
//   const n = g.length; // 도시의 수
//   const maxGold = a * 1000; // 최대 금 양 (kg 단위)
//   const maxSilver = b * 1000; // 최대 은 양 (kg 단위)

//   // DP 테이블 초기화
//   const dp = new Array(n);
//   for (let i = 0; i < n; i++) {
//     dp[i] = new Array(maxGold + 1);
//     for (let gold = 0; gold <= maxGold; gold++) {
//       dp[i][gold] = new Array(maxSilver + 1).fill(Infinity);
//     }
//   }

//   // 첫 번째 도시 초기화
//   for (let gold = 0; gold <= maxGold; gold++) {
//     for (let silver = 0; silver <= maxSilver; silver++) {
//       if (gold >= g[0] && silver >= s[0]) {
//         dp[0][gold][silver] = t[0];
//       }
//     }
//   }

//   // DP 채우기
//   for (let i = 1; i < n; i++) {
//     for (let gold = 0; gold <= maxGold; gold++) {
//       for (let silver = 0; silver <= maxSilver; silver++) {
//         dp[i][gold][silver] = dp[i - 1][gold][silver]; // 이전 도시에서 복사

//         const maxGoldFromCity = w[i] / t[i];
//         const maxSilverFromCity = w[i] / t[i];

//         if (gold >= g[i] && silver >= s[i]) {
//           dp[i][gold][silver] = Math.min(
//             dp[i][gold][silver],
//             dp[i - 1][gold - g[i]][silver - s[i]] + t[i]
//           );
//         }
//       }
//     }
//   }

//   // DP 테이블에서 최소 시간 찾기
//   let minTime = Infinity;
//   for (let gold = a * 1000; gold <= maxGold; gold++) {
//     for (let silver = b * 1000; silver <= maxSilver; silver++) {
//       minTime = Math.min(minTime, dp[n - 1][gold][silver]);
//     }
//   }

//   return minTime;
// }

// // 예시 데이터
// const a = 10;
// const b = 10;
// const g = [100];
// const s = [100];
// const w = [7];
// const t = [10];

// const result = solution(a, b, g, s, w, t);
// console.log("최소 건설 시간:", result);
