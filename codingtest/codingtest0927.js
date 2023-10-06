// function solution(a, b, g, s, w, t) {
//   var answer = -1;
//   let spendtime = 0;
//   let remaingoods = 0;
//   let a1 = a;
//   let b1 = b;
//   let g1 = g;
//   let s1 = s;
//   let w1 = w;
//   let t1 = t;
//   console.log(w1[0]);
//   // 도시를 짓는데 필요한 자원 a,b
//   // 각 도시에 번호 있다 i
//   // i 번쨰 도시바다 금g[i]kg 은s[i]kg
//   // i번 도시의 트럭은 i 번 도시와 새도시 건설현장만 왔다갔다가 가능하다. 그 시간은 t[i]로 계산한다.
//   //그 시간은 t[i]로 계산한다. 무게는 w[i]로 한번에 광물에 구분이 없다면
//   // console.log(a, b, g, s, w, t);

//   for (let i = 0; i < g.length; i++) {
//     while (g[i] > 0 || a > 0) {
//       spendtime = spendtime + t[i];
//       g[i] = g[i] - w[i];
//       a = a - w[i];
//       spendtime = spendtime + t[i];
//       console.log("a", a);
//     }
//   }

//   for (let i = 0; i < g.length; i++) {
//     while (g[i] > 0 || b > 0) {
//       spendtime = spendtime + t[0];

//       s[0] = s[0] - w[0];
//       b = b - w[0];
//       spendtime = spendtime + t[0];
//     }
//   }

//   // remaingoods = a1 - w + b1 - w;
//   // if (remaingoods < w) {
//   //   spendtime = spendtime + t[0];
//   // }
//   console.log("남은 물품", remaingoods);
//   console.log("spendtime", spendtime);
//   return spendtime;
// }

// // solution(10, 10, [100], [100], [7], [10]);
// solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]);

// class City {
//   spendtime;
//   constructor(gold, silver, trucktime, truckweight) {
//     this.gold = gold;
//     this.silver = silver;
//     this.trucktime = trucktime;
//     this.truckweight = truckweight;
//     this.oneway=0;
//     this.spendtime = 0;
//   }
//   showgold(value) {
//     return this.value;
//   }
//   usemetiral(value) {}
// }
// class NewCity {
//   constructor(needgold, needsilver) {
//     this.needgold = needgold;
//     this.needsilver = needsilver;
//   }
// }
// function solution(a, b, g, s, w, t) {
//   var answer = -1;
//   let spendtime = 0;
//   let remaingoods = 0;

//   let city = [];
//   let newcity = null;
//   // 도시를 짓는데 필요한 자원 a,b
//   // 각 도시에 번호 있다 i
//   // i 번쨰 도시바다 금g[i]kg 은s[i]kg
//   // i번 도시의 트럭은 i 번 도시와 새도시 건설현장만 왔다갔다가 가능하다. 그 시간은 t[i]로 계산한다.
//   //그 시간은 t[i]로 계산한다. 무게는 w[i]로 한번에 광물에 구분이 없다면
//   // console.log(a, b, g, s, w, t);

//   for (var i = 0; i < g.length; i++) {
//     city.push(new City(g[i], s[i], t[i], w[i]));
//   }
//   newcity = new NewCity(a, b);

//   console.log(newcity, city);
//   console.log("남은 물품", remaingoods);
//   console.log("spendtime", spendtime);
//   return spendtime;
// }

// solution(10, 10, [100], [100], [7], [10]);

function solution(a, b, g, s, w, t) {
  var answer = -1;
  let spendtime = 0;
  let remaingoods = 0;
  let a1 = a;
  let b1 = b;
  let g1 = g;
  let s1 = s;
  let w1 = w;
  let t1 = t;
  console.log(w1[0]);
  // 도시를 짓는데 필요한 자원 a,b
  // 각 도시에 번호 있다 i
  // i 번쨰 도시바다 금g[i]kg 은s[i]kg
  // i번 도시의 트럭은 i 번 도시와 새도시 건설현장만 왔다갔다가 가능하다. 그 시간은 t[i]로 계산한다.
  //그 시간은 t[i]로 계산한다. 무게는 w[i]로 한번에 광물에 구분이 없다면
  // console.log(a, b, g, s, w, t);

  t1 = t.sort();
  console.log("편도가 제일 긴경우", t1[t1.length - 1]);

  console.log("남은 물품", remaingoods);
  console.log("spendtime", spendtime);
  return spendtime;
}

solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]);
