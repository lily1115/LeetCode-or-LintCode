
 /**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */
// O(n^2)
function equal (first, second, target) {
  return first + second === target;
}

var twoSum = function (nums, target) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const remain = length - i;
    for (let j = 1; j < remain; j++) {
      if (equal(nums[i], nums[i + j], target)) {
        return [i, i + j];
      }
    }
  }
};
// O(n)
var twoSum2 = function (nums, target) {
  let buff_dict = {}
  for (let i = 0; i < nums.length - 1; i++) {
    if (num[i] in buff_dict ) { // obj.hasOwnProperty("key")  o.x!==undefined;
      return [buff_dict[nums[i]], i]
    } else {
      buff_dict[target - nums[i]] = i
    }
  }
} 
