
#Giovanni HoSang
#https://www.freecodecamp.org/challenges/diff-two-arrays
#YaadCode Free Code Camp Sessions Session 13

function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(function(index){
    if(arr2.indexOf(index) === -1){
      newArr.push(index);
    }
  });
  arr2.forEach(function(index){
    if(arr1.indexOf(index) === -1){
      newArr.push(index);
    }
  });
  return newArr;
}
