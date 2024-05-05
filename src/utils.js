export function pointsForWord(word) {
    let points = 0;
    for (const char of word) {
      points +=/[aeiou]/.test(char)?1:2;
    }
    return points;
  }
export function isPalindrome(lala){
    let points=0;
    const word=lala.toLowerCase();
    const isPal= word===word.split('').reverse().join('');
    return isPal?true:false

}