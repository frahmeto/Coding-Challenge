// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"


function LongestWord(sen) { 

  // code goes here  
  sen = sen.split(" ");
  var longst = sen[0];
 
  for (i = 0; i < sen.length; i++) {
    if (i == sen.length - 1) {
      return longst;
    } else if (sen[i].length >= sen[i + 1].length) {
      longst = sen[i];
    } else {
        longst = sen[i + 1];
    }
  }

  return sen; 

}
   
// keep this function call here 
console.log(LongestWord(readline()));

//
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
Input: "Launch code"
Output: Launch
Input: "coding"
Output: coding
