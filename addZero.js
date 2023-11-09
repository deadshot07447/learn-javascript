function findPairsWithSumZero(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
    
    return result;
  }
  
  // Example usage
  let inputArray = [1, 2, 3, -2, -1, 0];
  let pairsWithSumZero = findPairsWithSumZero(inputArray);
  
  console.log(pairsWithSumZero);
  