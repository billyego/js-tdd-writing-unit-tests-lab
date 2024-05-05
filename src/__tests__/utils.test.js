import {pointsForWord,isPalindrome} from "../utils"

describe("PointsForWord",()=>{
    it("calculates the total points for a word (1 point per vowel,2 per constant)",()=>{
        const word="test";
        const points = pointsForWord(word);
        expect(points).toBe(7);
    })
    
})
describe("isPalindrome",()=>{
    it("checks if a word is a palindrome and returns double number of points if it is",()=>{
        const word="racecar"
        const word1="car"
        const yeza=isPalindrome(word)
        const yeba=isPalindrome(word1)
        expect(yeza).toBe(true)
        expect(yeba).toBe(false)

    })
})