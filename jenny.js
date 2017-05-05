function missingWord(nums, str) {
  let s = '',
      i;
  str = str.replace(/\s/g, '');
  nums = nums.sort((a, b) => a - b);

  for (i = 0; i < nums.length; i++) {
    if (str[nums[i]] !== 'undefined') {
      s += str[nums[i]].toLowerCase();
    } else {
      return "No mission today"
    }
  }

  return s
}
