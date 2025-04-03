export function isAnagramEachOther(text1: string, text2: string): boolean {
    const map = new Map<string, number>();
    for (const char of text1) {
        if (!map.has(char)) {
            map.set(char, 0);
        }
        map.set(char, map.get(char)!! + 1);
    }
    for (const char of text2) {
        if (!map.has(char)) {
            return false;
        }
        map.set(char, map.get(char)!! - 1);
    }
    for (const value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
}

export function groupAnagrams1(words: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    // ถ้าใช้ sort จะเป็น O(n log n) + O(n) = O(n log n + n) = O(n log n)
    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord)!!.push(word);
  }
  return Array.from(map.values());
}

export function groupAnagrams2(words: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const word of words) {
    // แทนที่จะใช้การ sort ที่เป็น O(n log n) เปลี่ยนมาใช้การนับจำนวนตัวอักษร ซึ่งเป็น O(n)
    // แต่แลกมากับ การใช้ memory เพิ่มขึ้น
    // กรณีนี้สมมุติคือ a-z แต่ถ้าจะให้ cover universal -> ต้องจอง size === unicode size
    // fill จะเป็น O(n) เพราะต้อง fill ค่า 0 เข้าไปใน array
    const charCount = Array(26).fill(0);
    // เพราะสมมติว่าเป็น a-z เลยใช้ codePointAt(0) - 'a'.codePointAt(0)
    // ถ้าเป็น unicode ให้ใส่อัด index ไปเลย charCount[char.codePointAt(0)!!]++;
    for (const char of word) {
      charCount[char.codePointAt(0)!! - "a".codePointAt(0)!!]++;
    }
    // หลังจากนั้น เอามันมา join เป็น string ซึึ่งใช้เป็น key O(n)
    const key = charCount.join("#");
    // จบถึงตรงนี้ จะใช้ทั้งหมด O(n) + O(n) + O(n) = O(3n) = O(n)
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)?.push(word);
  }
  return Array.from(map.values());
}

export function groupAnagrams3(words: string[]): string[][] {
    const unicodeSize = Math.pow(2, 16);
    const map = new Map<string, string[]>();
    for (const word of words) {
      const charCount = Array(unicodeSize).fill(0);
      for (const char of word) {
        charCount[char.codePointAt(0)!!]++;
      }
      const key = charCount.join("#");
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)?.push(word);
    }
    return Array.from(map.values());
}
