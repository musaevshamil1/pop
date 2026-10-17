let secret = Math.floor(Math.random() * 10) + 1;
function guessNumber() {
  const input = prompt();
  const guess = Number(input);

  if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
    alert("Введите целое число от 1 до 10!");
    guessNumber();
    return;
  }
  if (guess === secret) {
    alert(`Угадал! Число ${secret}`);
  } else if (guess < secret) {
    alert("Загаданное число БОЛЬШЕ");
    guessNumber();
  } else {
    alert("Загаданное число МЕНЬШЕ");
    guessNumber();
  }
}

guessNumber();
