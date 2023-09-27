class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function solution(nodeinfo) {
  var answer = [[], []];
  for (var i = 0; i < nodeinfo.length; i++) {
    nodeinfo[i].push(i + 1);
  }
  let newarr = nodeinfo.sort(function (a, b) {
    return b[1] - a[1];
  });
  const root = new TreeNode(newarr[0]);
  let index = 1;
  let currentNode = root;
  // const queue = [];

  while (index < newarr.length) {
    if (newarr[index][0] < currentNode.value[0]) {
      if (currentNode.left !== null && currentNode.left !== undefined) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = new TreeNode(newarr[index]);
        // queue.push(currentNode);
        currentNode = root;
        index++;
        if (index >= newarr.length) {
          break;
        }
      }
    }
    if (newarr[index][0] > currentNode.value[0]) {
      if (currentNode.right !== null && currentNode.right !== undefined) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = new TreeNode(newarr[index]);
        // queue.push(currentNode);
        currentNode = root;
        index++;
        if (index >= newarr.length) {
          break;
        }
      }
    }
  }
  // console.log("currentNode", currentNode);
  let result = [];
  let result2 = [];
  function preorderTraversal(root) {
    if (root) {
      // console.log(root.value);
      result.push(root.value);
      preorderTraversal(root.left);
      preorderTraversal(root.right);
    }
  }
  preorderTraversal(currentNode);
  // 후위 순회 (Postorder Traversal)
  function postorderTraversal(root) {
    if (root) {
      postorderTraversal(root.left);
      postorderTraversal(root.right);
      // console.log(root.value);
      result2.push(root.value);
    }
  }
  postorderTraversal(currentNode);

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < result.length; j++) {
      if (i == 0) answer[i].push(result[j][2]);
      else answer[i].push(result2[j][2]);
    }
  }
  console.log("answer", answer);
  // 시작 node는 root로한다.
  // root 보다 x값이 작은경우 왼쪽 트리에 생성된다.
  // root 보다 x값이 큰경우 오른쪽 트리에 생성된다.
  // 구현
  // x값이 작은경우 왼쪽에 생성되는데 왼족 node가 비어있지않다면 왼쪽node(방문한노드)와 자신의 값을 비교한다
  // 자신의 값이 더 크다면 방문한 왼쪽 node의 오른쪽에 값이 비어있는지 확인한다음 비어있지않다면 생성한다. 비어있지않다면 다시 비교한다
  // x값이 큰경우 오른쪽에 생성되는데 오른쪽 node가 비어있지않다면 오른쪽node(방문한노드)와 자신의 값을 비교한다
  // 자신의 값이 더 작다면 방문한 왼쪽 node의 왼쪽 node의 값이 비어있는지 확인한다음 비어있지않다면 생성한다. 비어있지않다면 다시 비교한다.
  return answer;
}

solution([
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2],
]);

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// 중위 순회 (Inorder Traversal)
// function inorderTraversal(root) {
//   if (root) {
//     inorderTraversal(root.left);
//     console.log(root.value);
//     inorderTraversal(root.right);
//   }
// }

// // 전위 순회 (Preorder Traversal)
// function preorderTraversal(root) {
//   if (root) {
//     console.log(root.value);
//     preorderTraversal(root.left);
//     preorderTraversal(root.right);
//   }
// }

// // 후위 순회 (Postorder Traversal)
// function postorderTraversal(root) {
//   if (root) {
//     postorderTraversal(root.left);
//     postorderTraversal(root.right);
//     console.log(root.value);
//   }
// }

// // 이진 트리 생성 예제
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// console.log(root);
// console.log("Inorder Traversal:");
// inorderTraversal(root);

// console.log("Preorder Traversal:");
// preorderTraversal(root);

// console.log("Postorder Traversal:");
// postorderTraversal(root);
