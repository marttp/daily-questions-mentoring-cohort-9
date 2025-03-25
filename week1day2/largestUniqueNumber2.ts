export function largestUniqueNumberWithoutAdditionalMemory(nums: number[]): number {
  nums.sort((a, b) => a - b);
  if (nums.length === 1) {
    return nums[0];
  }
  let i = nums.length - 1;
  while (i >= 0) {
    // seen a duplicate
    if (nums[i] === nums[i - 1]) {
      // skip all duplicates, while kept decrement with limit
      while (i >= 0 && nums[i] === nums[i - 1]) {
        i--;
      }
    } else {
      return nums[i];
    }
    // After skipping all duplicates
    // i will be pointing to the most left of duplicate of the current number
    // move to the next number
    i--;
  }
  return -1;
}

export function largestUniqueNumberWithoutAdditionalMemory2(nums: number[]): number {
  nums.sort((a, b) => b - a);
  if (nums.length === 1) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    if ((i === 0 || nums[i] !== nums[i - 1]) && 
          (i === nums.length - 1 || nums[i] !== nums[i + 1])) {
      return nums[i];
    }
  }
  return -1;
}
