function split(wholeArray) {
  const count = Math.floor(wholeArray.length / 2)
  const firstHalf = wholeArray.slice(0, count).sort((a,b)=> a-b);
  const secondHalf = wholeArray.slice(count).sort((a,b)=> a-b);
  return [firstHalf, secondHalf];
};

function merge(left, right) {
  const final = [];
  while (left.length && right.length){
    if(left[0] <= right[0]){
      final.push(left[0]);
      left = left.slice(1);
    } else {
      final.push(right[0]);
      right = right.slice(1);
    }
  }
  while(left.length){
    final.push(left.shift())
  }
  while(right.length){
    final.push(right.shift())
  }
  return final;
};

function mergeSort (arr){
  if(arr.length<2) return arr;
  const temp = split(arr);
  const left = temp[0];
  const right = temp[1]
  return merge(left, right);
}
