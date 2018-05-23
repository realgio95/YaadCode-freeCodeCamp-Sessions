//Giovanni HoSang
//YaadCode FreeCodeCamp Sessions
function rot13(str) { // LBH QVQ VG!
  //for each character in string
    //Convert string at this character by changing from this string to another
  var resultant = "";
  var currentChar = "";
  var currentCharCode = 0;
  var newCharCode = 0;
  for (var i=0; i< str.length; i++)
  {
    currentCharCode = str.charCodeAt(i);
    newCharCode = currentCharCode;
    if (currentCharCode >= 65 && currentCharCode<= 90 )
    {
       //currentChar = str.charAt(i); 
      newCharCode = currentCharCode + 13;
      if (newCharCode > 90)
      {
        newCharCode %= 90;
        newCharCode = newCharCode + 64;
      }
    }
    resultant += String.fromCharCode(newCharCode);
  }
  return resultant;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
