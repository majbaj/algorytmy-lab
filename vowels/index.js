// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    const vowelArray = [];
  
    for (const letter of lowerStr) {
      if (vowelsList.includes(letter)) {
        vowelArray.push(letter);
      }
    }
  
    return vowelArray.length;
  }
  
  module.exports = vowels;
