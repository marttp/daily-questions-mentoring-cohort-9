function moveZeroesWithNewArray1(nums: number[]): number[] {
  // You see and human instinct make you group the zeroes and non-zeroes, right?
  const nonZeroes = nums.filter((num) => num !== 0);
  const zeroes = nums.filter((num) => num === 0);
  return [...nonZeroes, ...zeroes];
}

function moveZeroesWithNewArray2(nums: number[]): number[] {
  // Based on 1 - If you interested in non-zeroes, what would it be?
  const n = nums.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    // You are expecting to see non-zeroes
    if (nums[i] !== 0) {
      result.push(nums[i]);
    }
  }
  // But, in case array contain zeroes, what it might be?
  const currentLength = result.length; // This length should be less than n
  const remainingLength = n - currentLength;
  // You are expecting to fill zeroes for the remaining length
  for (let i = 0; i < remainingLength; i++) {
    result.push(0);
  }
  return result;
}

function moveZeroesTwoPointers1(nums: number[]): number[] {
  // Based on above code, you are interested in non-zeroes
  // While in the last, you want to fill zeroes
  // So, you can use two pointers to do this
  const n = nums.length;
  let readIndex = 0;
  let writeIndex = 0;
  while (readIndex < n) {
    // If you see non-zeroes, you write and move
    // Take a look at the above example
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
    readIndex++;
  }
  // Then you fill zeroes on the remaining length, right?
  while (writeIndex < n) {
    nums[writeIndex] = 0;
    writeIndex++;
  }
  return nums;
}

function moveZeroesTwoPointers2(nums: number[]): number[] {
  // Then, I think based on above while loop
  // What you want to reach is zeroes on trailing
  // You can use for loop to reach and keep track of non-zeroes
  const n = nums.length;
  let lastNonZeroIndex = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      if (lastNonZeroIndex !== i) {
        nums[i] = 0;
      }
      lastNonZeroIndex++;
    }
  }
  return nums;
}

export function moveZeroes(nums: number[]): number[] {
  const candidates = [
    moveZeroesWithNewArray1,
    moveZeroesWithNewArray2,
    moveZeroesTwoPointers1,
    moveZeroesTwoPointers2,
  ];
  const n = candidates.length;
  const randomIndex = Math.floor(Math.random() * n);
  return candidates[randomIndex](nums);
}
