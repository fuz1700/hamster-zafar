let hamster = document.querySelector(".hamster img");

let scoreSpan = document.querySelector(".score");

let updateBtn = document.querySelector(".update");

let boostBtn = document.querySelector(".boost");

let sms = document.querySelector(".sms");

let score = 0;
let clickValue = 1;
let updateValue = 100;
let boostValue = 50;
let boostTime = 5000;

hamster.addEventListener("click", function (event) {
  score += clickValue;

  scoreSpan.textContent = score;

  showCoinValue(event.clientX, event.clientY, clickValue);

  if (score >= 1000) {
    hamster.setAttribute("src", "biznes.png");
  }
  if (score >= 2000) {
    hamster.setAttribute("src", "lord.png");
  }
  if (score >= 5000) {
    hamster.setAttribute("src", "tanga.png");
  }
});

updateBtn.addEventListener("click", function () {
  if (score >= updateValue) {
    score -= updateValue;
    clickValue++;
    updateValue = Math.floor(updateValue * 1.5);
    scoreSpan.textContent = score;
    updateValue.textContent = `Buy update (${updateValue} point`;
    sms.textContent = "Successfully finished!";
  } else {
    sms.textContent = "Brother,you didn't get enough points!";
  }
});

boostBtn.addEventListener("click", function () {
  if (score >= boostValue) {
    score -= boostValue;
    scoreSpan.textContent = score;
    clickValue += 2;
    sms.textContent = "Boost activated!";
    boostBtn.disabled = true;

    setTimeout(() => {
      clickValue -= 2;
      sms.textContent = "Boost finished!";
      boostBtn.disabled = false;
    }, boostTime);
  }
});

// Функция для отображения значения клика
function showCoinValue(x, y, value) {
  const coinValueElem = document.createElement("div"); // Создаем новый элемент
  coinValueElem.textContent = `+${value}`;
  coinValueElem.className = "coin"; // Добавляем класс для стилизации
  coinValueElem.style.position = "absolute"; // Позиционируем элемент абсолютно
  coinValueElem.style.left = `${x}px`; // Устанавливаем координату X
  coinValueElem.style.top = `${y}px`; // Устанавливаем координату Y
  coinValueElem.style.color = "#000"; // Цвет текста
  coinValueElem.style.opacity = 1; // Делаем текст видимым
  document.body.appendChild(coinValueElem); // Добавляем элемент на страницу

  // Добавляем анимацию
  setTimeout(() => {
    coinValueElem.style.transform = "translateY(-30px)"; // Поднимаем текст вверх
    coinValueElem.style.opacity = 0; // Скрываем текст
  }, 0);

  // Удаляем элемент из DOM через 0.5 секунды
  setTimeout(() => coinValueElem.remove(), 500);
}
