# Week 1 Day 4 Challenges

## 1. Clear Digit

**Description:**  

Given an input string consisting of alphabetic characters and digits, remove all digits and any alphabetic characters to the left of those digits.

ให้ input เป็น text ที่ประกอบไปด้วยตัวอักขระ Alphabet และตัวเลข ให้ทำการลบตัวเลข และตัวอักขระทางด้านซ้ายของตัวเลขนั้น ๆ

***Example #1***

```text
Input: text = "po49"
Output: ""
```

***Example #2***

```text
Input: text = "49po"
Output: "po"
```

***Example #3***

```text
Input: text = "asd8sx5a961os3"
Output: "ao"
```

---

## 2. Move Zeroes

**Description:**  
Given an array of integers `nums`, rearrange the array so that all `0`s are moved to the end while preserving the relative order of the non-zero elements.  

กำหนดอาร์เรย์ของจำนวนเต็ม `nums` ให้จัดเรียงอาร์เรย์ใหม่เพื่อให้ `0` ทั้งหมดถูกย้ายไปยังจุดสิ้นสุดในขณะที่ยังคงลำดับสัมพันธ์ของตัวเลขอื่น ๆ ที่ไม่ใช่ศูนย์ไว้

**Note:**  
This operation must be performed in-place without creating a copy of the array.

สามารถทำแบบไม่ copy array ได้มั้ยนะ?

***Example #1***  

```text
Input: nums = [0,1,0,3,12]  
Output: [1,3,12,0,0] 
```
