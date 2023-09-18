// function solution(arr, query) {
//   var answer = arr;
//   let judge = true;
//   let count = 1;
//   // judge 가 false이면 앞의 값 지우고 true이면 뒤의 값을 지운다.
//   for (let i = 0; i < query.length; i++) {
//     if (judge == true) {
//       console.log(i);
//       console.log(judge);
//       answer = answer.slice(0, query[i] + 1);
//       console.log(answer);
//       judge = false;
//     } else if (judge == false) {
//       console.log(i);
//       console.log(judge);
//       answer = answer.slice(query[i]);
//       console.log(answer);
//       judge = true;
//     }
//   }

//   console.log("answer", answer);
//   return answer;
// }

// solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input = [line];
// }).on("close", function () {
//   str = input[0];
// });

// 몇번만에 자기자신으로 돌아오는 판단해야하며 나가는 개수는 의외로 4의 배수에 가깝다.
function solution(grid) {
  var answer = [];
  let gridArr = "";
  let arr = [];

  let count = 0; // 행값
  let count2 = 0; //열값
  let gugja = 0;
  gridArr = grid.toString().split("");
  console.log(gridArr);
  for (let i = 0; i < gridArr.length; i++) {
    if (gridArr[i] == ",") {
      count = i;
    }
  }
  count = 0;
  for (var i = 0; i < gridArr.length; i++) {
    console.log("Grid", gridArr[i]);
    console.log("arr", arr);
    arr[count] = new Array(count2);
    count2++;
    if (gridArr[i] == ",") {
      count++;
      count2 = 0;

      console.log("asd", i);
    }
  }
  arr[count] = new Array(count2);
  count = 0;
  count2 = 0;
  let realarr = JSON.parse(JSON.stringify(arr));

  for (var i = 0; i < gridArr.length; i++) {
    if (gridArr[i] == ",") {
      count++;
      count2 = 0;
      continue;
    }
    gugja++;

    console.log("gerrrrr", gridArr[i]);
    arr[count][count2] = gridArr[i];
    count2++;
  }
  console.log("arrrr", arr, gugja);
  console.log("arr", realarr);
  //        ↑  ←   ↓  →
  let dy = [1, 0, -1, 0];
  let dx = [0, -1, 0, 1];

  let direction = [
    [0, 1, 3],
    [1, 2, 0],
    [2, 3, 1],
    [3, 0, 2],
  ];

  let nowvisited = [];
  let fin = [];
  let pred = [];
  let countung = 0;
  while (true) {
    if (countung == 0) {
      if (arr[0][0] == "S") {
        break;
      }
      if (arr[0][0] == "L") {
        console.log("asd", direction[1]);
        let y = 0 + dy[2];
        let x = 0 + dx[2];
        if (y > arr[0].length || y < 0) {
          console.log("정해진 격자를 벗어나서 반대편으로간다.");
          y > arr[0].length
            ? (y = 0)
            : y < 0
            ? (y = arr[0].length - 1)
            : console.log("이건뭐야");
        }
        if (x > arr[0][0].length || x < 0) {
          console.log("정해진 격자를 벗어나서 반대편으로간다.");
          x > arr[0].length
            ? (x = 0)
            : x < 0
            ? (x = arr[0].length - 1)
            : console.log("이건뭐야");
        }

        nowvisited = arr[y][x];
      }
      console.log(
        "asd가 302가나오는데 R이므로 3기준 오른쪽 index 2로 판단하면된다."
      );
      if (arr[0][0] == "R") {
        console.log("asd", direction[3]);
        console.log(dy[2], dx[2]);
        pred = direction[3];
        let y = 0 + dy[2];
        let x = 0 + dx[2];

        if (y > arr[0].length || y < 0) {
          console.log("정해진 격자를 벗어나서 반대편으로간다.");
          y > arr[0].length
            ? (y = 0)
            : y < 0
            ? (y = arr[0].length - 1)
            : console.log("이건뭐야");
        }
        if (x > arr[0][0].length || x < 0) {
          console.log("정해진 격자를 벗어나서 반대편으로간다.");
          x > arr[0].length
            ? (x = 0)
            : x < 0
            ? (x = arr[0].length - 1)
            : console.log("이건뭐야");
        }

        nowvisited = arr[y][x];
        console.log(nowvisited);

        // if (x > arr[0][0].length.length) {
        //   console.log("");
        // }
      }
    }
    if (nowvisited == "L") {
    }
    if (nowvisited == "R") {
      console.log("pred", pred[0]);
      if (pred[0] == "3") {
        pred = direction[3];
        let y = 0 + dy[2];
        let x = 0 + dx[2];

        if (y > arr[0].length || y < 0) {
          console.log("정해진 격자를 벗어나서 반대편으로간다.");
          y > arr[0].length
            ? (y = 0)
            : y < 0
            ? (y = arr[0].length - 1)
            : console.log("이건뭐야");
        }
        if (x > arr[0][0].length || x < 0) {
          console.log("정해진 격자를 벗어나서 반대편으로간다.");
          x > arr[0].length
            ? (x = 0)
            : x < 0
            ? (x = arr[0].length - 1)
            : console.log("이건뭐야");
        }

        nowvisited = arr[y][x];
        console.log(nowvisited);
      }
    }
    if (nowvisited == "S") {
    }
    countung++;
    if (countung == 5) {
      break;
    }
  }
  return answer;
}
// 시작 지점 그냥 0,0
// 내가 처음 시작한 방향과 나가는 방향이 같으면 정지한다. s면 직진 l이면 좌회전 , 이전격자에서 어떤방향으로 처음시작한 격자에 들어오는가.
// [0,0][0,1],[1,0],[1,1]
solution(["R", "R"]);
