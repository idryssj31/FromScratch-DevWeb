function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  let arrLeft = [];
  let arrRight = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
  }

  if (arrLeft.length > 0 && arrRight.length > 0) {
    console.log(arrLeft, pivot, arrRight);
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
  } else if (arrLeft.length > 0) {
    console.log(arrLeft);
    return [...quickSort(arrLeft), pivot];
  } else {
    console.log(arrRight);
    return [pivot, ...quickSort(arrRight)];
  }
}

console.log(quickSort([10, 4, 20, 365, 40, 78, 780,25]));
