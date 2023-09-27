class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(values) {
  if (values.length === 0) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue = [root];
  let index = 1;

  while (index < values.length) {
    const currentNode = queue.shift();
    console.log(index);
    console.log("루트", root);
    console.log("currentNode", currentNode);
    const leftValue = values[index++];
    if (leftValue !== null && leftValue !== undefined) {
      currentNode.left = new TreeNode(leftValue);
      queue.push(currentNode.left);
    }

    if (index < values.length) {
      const rightValue = values[index++];
      if (rightValue !== null && rightValue !== undefined) {
        currentNode.right = new TreeNode(rightValue);
        queue.push(currentNode.right);
      }
    }
  }
  // console.log(queue);
  // console.log(root);

  return root;
}

const values = [1, 2, 3, 4, 5];
const root = createBinaryTree(values);

// 이제 이진 트리가 생성되었습니다.
