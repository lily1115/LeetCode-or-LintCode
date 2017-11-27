/**
 * @param s: The first string
 * @param t: The second string
 * @return: true or false
 */
const anagram = function (s, t) {
  if (s.length !== t.length) return false
  let obj = {}
  for (let str of s) {
      if (obj[str]){
          obj[str]++
      } else {
          obj[str] = 1
      }
  }
  for (let t_str of t) {
      if (t_str in obj){
          obj[t_str]--
          if(obj[t_str] < 0) {
              return false
          }
      } else {
          return false
      }
  }
  return true
}