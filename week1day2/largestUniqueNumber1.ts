export function largestUniqueNumber(nums: number[]): number {
  const seen = Array(3001).fill(0);
  for (const num of nums) {
    seen[num]++;
  }
  for (let i = 3000; i >= 0; i--) {
    if (seen[i] === 1) {
      return i;
    }
  }
  return -1;
}
