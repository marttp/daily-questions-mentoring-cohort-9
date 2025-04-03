# Week 2 Day 4 Challenges

## 1. Whether two given strings are anagrams

**Description:**  
Determine whether two given strings are anagrams of each other. Two strings are considered anagrams if they contain the same characters in the same frequency, regardless of their order.

จงตรวจสอบว่า String ที่กำหนดให้ 2 ตัวเป็นแอนนาแกรม (anagrams) ของกันและกันหรือไม่
String 2 ตัว จะถือว่าเป็น anagram หากประกอบด้วยอักขระเดียวกันและมีความถี่ของแต่ละอักขระเท่ากัน โดยไม่คำนึงถึงลำดับ

**Example:**  

```text
Input: str1 = "listen", str2 = "silent"  
Output: true  

Input: str1 = "hello", str2 = "world"  
Output: false  
```

## 2. Group anagrams

**Description:**  
Given an array of strings, group the strings that are anagrams of each other into separate groups.

จาก array of string ที่กำหนด ให้จัดกลุ่ม string ที่เป็น anagram ของกันและกันไว้ในกลุ่มเดียวกัน

**Example:**  

```text
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]  
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]  
```
