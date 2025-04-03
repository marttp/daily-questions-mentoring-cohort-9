# Week 2 Day 5 Challenges

## 1. Can I Attend All Meetings?

**Description:**  
Given an array of meeting intervals where each interval is represented as `[start, end]`, determine if a person can attend all meetings without any overlap. A person can attend all meetings if no two meetings overlap in time.

มี array ของช่วงเวลาประชุม (meeting intervals) โดยแต่ละช่วงแทนด้วย [start, end] ให้หาคำตอบว่าคนคนหนึ่งจะสามารถเข้าร่วมประชุมทั้งหมดได้โดยไม่มีช่วงเวลาทับซ้อน (overlap) กันหรือไม่ คนนั้นจะเข้าร่วมประชุมทั้งหมดได้ ก็ต่อเมื่อไม่มีการประชุมสองครั้งใดที่มีเวลาทับซ้อนกัน

**Example 1:**

```text
Input: intervals = [[0, 30], [5, 10], [15, 20]]  
Output: false  
Explanation: The meeting [5, 10] overlaps with [0, 30].
```

**Example 2:**

```text
Input: intervals = [[7, 10], [2, 4]]  
Output: true  
Explanation: There is no overlap between the meetings.
```

**Example 3:**  

```text
Input: intervals = [[1, 5], [5, 10], [10, 15]]  
Output: true  
Explanation: Meetings only touch at their boundaries, so there is no overlap.
```

**Example 4:**

```text
Input: intervals = [[1, 3], [2, 6], [8, 10]]  
Output: false  
Explanation: The meeting [1, 3] overlaps with [2, 6].
```

**Example 5:**

```text
Input: intervals = []  
Output: true  
Explanation: No meetings are scheduled, so there is no overlap.
```
