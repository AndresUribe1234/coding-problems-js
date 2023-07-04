const containsDuplicate = function (nums) {
  if (nums.length <= 1) return false;

  const arrayToCompare = [];

  for (let i = 0; i < nums.length; i++) {
    if (!arrayToCompare.includes(nums[i])) {
      arrayToCompare.push(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};

containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
