const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('.span');

const renderTime = (seconds) => {
  const s = Math.floor(seconds % 60); // Получаем секунды
  const m = Math.floor(seconds / 60 % 60); // Получаем минуты
  const h = Math.floor(seconds / 60 / 60 % 60); // Получаем часы

  return `${h}:${m}:${s}:ms тикают`;
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timer);
        timerEl.innerHTML = "Ура, таймер закончил работу";
      } else {
        timerEl.innerHTML = renderTime(seconds - 1);
      }

      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

// Очистите input так, чтобы в значении оставались только числа
inputEl.addEventListener('input', (e) => {
  const value = e.target.value;

  e.target.value = value.replace(/\D/g,''); // валидация input(только цифры)
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  if (seconds) {
    timerEl.innerHTML = renderTime(seconds - 1);
    animateTimer(seconds - 1);
    inputEl.value = '';
  } else {
    alert('Введите число больше 0');
    inputEl.value = '';
  }
});
