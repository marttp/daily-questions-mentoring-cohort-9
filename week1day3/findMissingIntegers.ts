export function findMissingIntegers(nums: number[]): number[] {
  const n = nums.length;
  const seen = new Array(n + 1).fill(false);
  for (const num of nums) {
    if (num > 0 && num <= n) {
      seen[num] = true;
    }
  }
  // Produce the result
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (!seen[i]) {
      result.push(i);
    }
  }
  return result;
}

export function findMissingIntegers2(nums: number[]): number[] {
  const n = nums.length;
  const seen = new Set<number>(nums);
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (!seen.has(i)) {
      result.push(i);
    }
  }
  return result;
}

export function findMissingIntegers3(nums: number[]): number[] {
  const n = nums.length;
  const seen: { [key: number]: boolean } = {};
  for (const num of nums) {
    seen[num] = true;
  }
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (!seen[i]) {
      result.push(i);
    }
  }
  return result;
}
