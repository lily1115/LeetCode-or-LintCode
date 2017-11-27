/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let obj = {} 
  let num = 0
  for (let str of s) {
    if (obj[str]) {
      return num
    } else {
      obj[str] = true
      num ++
    }
  }
}