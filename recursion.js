/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
if(nums.length === i) return 1;
return nums[i] * product(nums, i+1)

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWord=0) {
  if(words.length ===i) return longestWord;
  longestWord = Math.max(longestWord, words[i].length)
  return longest(words, i=i+1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, result='') {
  if(str.length -1< i){
    return result
  };
  return everyOther(str, i+2, result= result+str[i])


}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, reversed='') {
  if(str.length -1 < i){
    return reversed === str;
  }
  return isPalindrome(str, i + 1, reversed= reversed + str[str.length-i-1])
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
if(arr[i] === val) return i;
if(arr.length === i && arr[i] !== val)return -1
return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, reversed='') {
  if(str.length -1 < i){
    return reversed;
  }

  return revString(str, i + 1, reversed= reversed + str[str.length-i-1])
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let output = [];
for (let key in obj){
  if(typeof obj[key] ==='string') output.push(obj[key]);
  if(typeof obj[key] === 'object') output.push(...gatherStrings(obj[key]))
}
return output
}



/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end = arr.length) {

let mid = Math.floor((start+end)/2)
if (start > end) return -1
if(arr[mid]===val)return mid;
if(arr[mid] > val) return binarySearch(arr, val, start, mid -1)
return binarySearch(arr, val, mid+1, end)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
