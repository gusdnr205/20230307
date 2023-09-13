// function solution(my_string, is_prefix) {
//   if (my_string.length < is_prefix.length) {
//     return 0;
//   }
//   if (is_prefix.startsWith(my_string[0])) {
//     for (let i = 0; i < is_prefix.length; i++) {
//       if (my_string[i] === is_prefix[i]) {
//         console.log(is_prefix[i]);
//       } else {
//         return 0;
//       }
//     }
//     return 1;
//   } else {
//     return 0;
//   }
// }

// solution("banana", "ban");

function solution(a, b, c, d) {
  const arr1 = [a, b, c, d];
  const arr2 = [];
  const arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
      // 중복되는 값이되 다른 이전에 저장된값하고는 다른값일떄
      if (arr1[i] === arr1[j] && !arr2.includes(arr1[i])) {
        arr2.push(arr1[i]);
      } else {
        // arr3.push(arr1[i]);
      }
    }
  }
  if (arr2.length < 2) {
    for (var i = 0; i < arr2.length; i++) {
      for (var j = 0; j < arr1.length; j++) {
        if (arr2[i] != arr1[j]) {
          arr3.push(arr1[j]);
        }
      }
    }
  }
  // arr2.filter((value, index) => {
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] != value) {
  //       arr3.push(arr1[i]);
  //     }
  //   }
  // });
  console.log("arr1", arr1);
  console.log("arr2", arr2);
  // const numSet = new Set(arr3);
  console.log("arr3", arr3);

  if (arr2.length == 1 && arr3.length == 0) {
    console.log(1111 * arr2[0]);
    return 1111 * arr2[0];
  }
  if (arr2.length == 1 && arr3.length == 2) {
    console.log(arr3[0] * arr3[1]);
    return arr3[0] * arr3[1];
  }
  if (arr2.length == 2) {
    console.log(arr2[0] + arr2[1]) * (arr2[0] - arr2[1]);
    return Math.abs(arr2[0] + arr2[1]) * (arr2[0] - arr2[1]);
  }
  if (arr2.length == 1 && arr3.length == 1) {
    console.log((10 * arr2[0] + arr3[0]) ** 2);
    return (10 * arr2[0] + arr3[0]) ** 2;
  }
  if (arr2.length == 0) {
    arr1.sort();
    console.log(arr1[0]);
    return arr1[0];
  }
}

solution(4, 4, 4, 1);
