/**
 * 
 * @param {s} string
 *  split()方法将一个字符串对象的每个字符拆出来，并且将每个字符串当成数组的每个元素
 *  reverse()方法用来改变数组，将数组中的元素倒个序排列，第一个数组元素成为最后一个，最后一个变成第一个
 *  join()方法将数组中的所有元素边接成一个字符串
 */
function reverseString (s) {
  var splitString = s.split(' ')
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join(' '
)
  return  joinArray
}
// 简化后
function reverseString(str) { 
  return str.split("").reverse().join(""); 
} 
reverseString("hello")