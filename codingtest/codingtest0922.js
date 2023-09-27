// function solution(s) {
//   let arr = s.split(" ");
//   let tmp = 0;
//   let sub = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "Z") {
//       sub = arr[i - 1];
//       tmp = tmp - sub;
//       continue;
//     }
//     tmp = tmp + parseInt(arr[i]);
//   }
//   return tmp;
// }

// solution("1 2 Z 3");

// function solution(wallpaper) {
//   var answer = [];
//   // y값이 가장 작은 놈의 인덱스 의 y x값이 가장 작은놈의 인덱스 둘의 x,y값이 첫번쨰 [x,y]
//   // y값이 가장큰놈 의 인덱스의 y추출 x값이 가장 큰놈의 x값 추출 [x2,y2]
//   // 결과 [y,x,y2,x2]

//   let inputstring = wallpaper;
//   const xArr = [];
//   const yArr = [];
//   for (let i = 0; i < inputstring.length; i++) {
//     for (let j = 0; j < inputstring[i].length; j++) {
//       let file = inputstring[i].split("")[j];
//       if (file == "#") {
//         console.log("이위치에 파일이 존재한다", "x", j, "y", i);
//         xArr.push(j);
//         yArr.push(i);
//       }
//     }
//   }

//   let asd = yArr.sort(function (a, b) {
//     return a - b;
//   });
//   answer.push(asd[0]);
//   answer.push(xArr.sort()[0]);
//   answer.push(asd[yArr.length - 1] + 1);
//   answer.push(xArr.sort()[xArr.length - 1] + 1);
//   console.log(asd);

//   console.log(answer);
//   return answer;
// }

// solution([
//   ".#..#",
//   "#...#",
//   "#...#",
//   "#...#",
//   "#...#",
//   "#...#",
//   "#...#",
//   "#...#",
//   "#...#",
//   "#...#",
//   ".#..#",
// ]);

// function solution(left, right) {
//   var answer = 0;
//   // console.log(left, right);
//   let arr = [];
//   let count = 0;

//   for (let j = left; j <= right; j++) {
//     arr.push(new Array());
//     for (let i = 0; i <= j; i++) {
//       if (j % i == 0) {
//         // console.log(i);
//         arr[count].push(i);
//         // console.log(i);
//       }
//     }
//     count++;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length % 2 == 0) {
//       answer = answer + arr[i][arr[i].length - 1];
//     } else {
//       answer = answer - arr[i][arr[i].length - 1];
//     }
//   }
//   console.log(answer);
//   return answer;
// }
// solution(13, 17);

// function solution(arr1, arr2) {
//   // 결과를 저장할 빈 배열을 생성합니다.
//   var result = [];

//   // 두 배열의 길이가 같다고 가정합니다.
//   for (var i = 0; i < arr1.length; i++) {
//     // 현재 위치의 두 배열 요소를 더하여 새로운 배열에 추가합니다.
//     var innerResult = [];
//     for (var j = 0; j < arr1[i].length; j++) {
//       innerResult.push(arr1[i][j] + arr2[i][j]);
//     }
//     result.push(innerResult);
//   }

//   return result;
// }

function solution(arr, idx) {
  var answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i >= idx) {
      if (arr[i] == 1 && answer == 0) {
        console.log(i);
        answer = i;
      }
    }
  }
  return answer ? answer : -1;
}

solution([1, 1, 1, 1, 0], 3);
