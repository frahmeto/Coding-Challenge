function charCount(myChar, str) {
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    if (myChar === str[i]) {
      x += 1;
    }
  }
  return x;
};

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));


