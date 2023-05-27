 function isPalindrome(word){
  var reversed = word.split("").reverse().join("");
  if (reversed === word) return true;

    return false;
}


isPalindrome("abba","racecar","a","robot","ab")
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
