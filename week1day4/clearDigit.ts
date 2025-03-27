export function clearDigit(s: string): string {
  const result: string[] = [];
  for (const c of s) {
    if (isDigit(c) && result.length > 0) {
      result.pop();
    } else {
      result.push(c);
    }
  }
  return result.join("");
}

function isDigit(c: string): boolean {
  return c >= "0" && c <= "9";
}
