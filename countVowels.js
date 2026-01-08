const countVowels = (str) => 
  str.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;

console.log(countVowels("programming"));