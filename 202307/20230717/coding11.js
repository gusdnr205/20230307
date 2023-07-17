function multiplyMatrices(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;
  
    if (cols1 !== rows2) {
      return -1; 
    }
  
    const result = [];
    for (let i = 0; i < rows1; i++) {
      result[i] = [];
      for (let j = 0; j < cols2; j++) {
        let sum = 0;
        for (let k = 0; k < cols1; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
      }
    }
  
    return result;
  }
  
  const matrix1 = [[1, 2], [2,4]];
  const matrix2 = [[1, 0], [0, 3]];
  
  const multiplicationResult = multiplyMatrices(matrix1, matrix2);
  
  if (multiplicationResult === -1) {
    console.log('안된다.');
  } else {
    console.log('결과:', multiplicationResult);
  }
  