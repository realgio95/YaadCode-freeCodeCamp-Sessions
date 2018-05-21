
function palindrome(str) {
  
  //Use regexp to
  
  var pattern = /[a-zA-Z0-9]/g;
  
  // Good luck!
  
  var result = str.match(pattern);

  result = result.join("");
  result = result.toLowerCase();
  
  //Split  reversed version
  var reversed = result;
  
  reversed = reversed.split("");
  reversed.reverse();
  reversed = reversed.join("");
  
  var isTrue= false;
  
  
  if (!(result < reversed || result > reversed)) {
    isTrue = true;
  }
  
  return isTrue;
}



palindrome("never odd or even");
