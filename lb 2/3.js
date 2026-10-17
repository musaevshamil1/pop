const students = [
  { name: 'рита', grade: 5 },
  { name: 'лера', grade: 3 },
  { name: 'даня', grade: 4 },
  { name: 'катя', grade: 5 },
  { name: 'даша', grade: 2 },
  { name: 'соня', grade: 2 }
];

function rezult(students, threshold) {
  return students.filter(s => s.grade > threshold);
}

function rezult2(students) {
  const total = students.reduce((sum, s) => sum + s.grade, 0);
  return total / students.length;
}
console.log(rezult(students, 3).map(s => s.name).join());
console.log(rezult2(students));