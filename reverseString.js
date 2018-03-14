//YaadCode Live Coding Sessions - 9th Session
//FreeCodeCampKingston Jamaica Community
//Giovanni HoSang
//https://youtu.be/YPPXK1KonjQ
function reverseString(str) {
  var chars = str.split("");
  chars.reverse();
  newStr = chars.join("");
  return newStr;
}

reverseString("hello");
