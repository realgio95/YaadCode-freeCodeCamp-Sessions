#Giovanni HoSang
#https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range
#YaadCode Free Code Camp Sessions Session 13


function sumAll(arr) {
  var leftNum = arr[0];
  var rightNum = arr[1];
  var maxNum;
  var minNum;
  if (leftNum > rightNum){
     maxNum = leftNum;
     minNum = rightNum;
  }else{
    maxNum = rightNum;
    minNum = leftNum;
  }
  
  var sum = 0;
  for (var curr = minNum; curr <= maxNum; curr++){
    sum+= curr;
  }
  
  return sum;
}

sumAll([1, 4]);
