//YaadCode Live Coding Sessions - 9th Session
//FreeCodeCampKingston Jamaica Community
//Giovanni HoSang
//https://youtu.be/YPPXK1KonjQ

function chunkArrayInGroups(arr, size) {
  // Break it up.
  //[0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]
  var numOfArrays = Math.ceil( (arr.length) / size ) ;
  var arrLength = arr.length;
  
  outputArray = [];
  
  current=0;
  
  for (var i=0; i< numOfArrays ; i++){
    
    outputArray.push(arr.slice(current, current+size));
    
    current+=size; //3
    if (current>=arrLength){
      break;
    }
  }
  
  
  return outputArray;
  
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
