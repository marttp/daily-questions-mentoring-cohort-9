type Student = {
  id: number;
  name: string;
};

export function bothGroupStudent(
  groupA: Student[],
  groupB: Student[]
): Student[] {
  const seen = new Set();
  // memo
  for (const student of groupA) {
    seen.add(student.id);
  }
  const bothGroupStudent = [];
  // traverse on other set
  for (const student of groupB) {
    if (seen.has(student.id)) {
      bothGroupStudent.push(student);
    }
  }
  return bothGroupStudent;
}
