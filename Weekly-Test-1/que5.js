function rotateArrayRight(arr, positions) {
    if (arr.length === 0) {
      return arr;
    }
  
    const n = arr.length;
    positions = positions % n; // Ensure positions is within array length
  
    if (positions < 0) {
      positions += n; // Convert negative positions to positive
    }
  
    const rotatedPart = arr.slice(0, n - positions);
    const rest = arr.slice(n - positions);
  
    return rest.concat(rotatedPart);
  }
  
 
  const originalArray = [1, 2, 3, 4, 5];
  const positionsToRotate = 3;
  
  const rotatedArray = rotateArrayRight(originalArray, positionsToRotate);
  console.log(rotatedArray);