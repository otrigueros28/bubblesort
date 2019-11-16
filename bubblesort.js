let swapCounter = 0;

function bubbleSort(array) {
  if(array.length === 0) return [];
  for(let i=0; i<array.length; i++){
    if(array[i] > array[i+1]){
      let tempswap = array[i];
      array[i] = array[i+1];
      array[i+1] = tempswap
      swapCounter++;
    }
  }
  return array;
}

