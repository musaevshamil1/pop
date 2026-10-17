function checkNumber(n) {
  let a;
  let b;
  if (n > 0) {
    a = 'положительное';
  } else if (n < 0) {
    a = 'отрицательное';
  } else {
    a = 'ноль';
  }
  if (n % 2 === 0) {
    b = 'чётное';
  } else {
    b = 'нечётное';
  }

  console.log(`${n}:${a},${b}`);
}

checkNumber(0);