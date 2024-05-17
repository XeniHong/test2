// Получаем элемент кнопок

const question = document.querySelector('.question__change');
const text = document.querySelector('.question__chText');



const btn1 = document.querySelector('.qu__btn-1');
const btn2 = document.querySelector('.qu__btn-2');
const btn3 = document.querySelector('.qu__btn-3');


// Устанавливаем обработчики событий для кнопок
btn1.addEventListener('click', showwhat);
btn2.addEventListener('click', showcan);
btn3.addEventListener('click', showwhich);

btn3.classList.add("question__block--active")
question.innerText = "Какая минимальная и максимальная сумма депозита?";
text.innerText = "Минимальный размер депозита – 100 рублей. \n  \n  Максимальный размер депозита – 80 000 000 рублей.";



// Функция показа 
//-----------------------------------------what
function showwhat() {
    btn1.classList.add("question__block--active");
    question.innerText = " Что нужно, чтобы начать работу с future technologies company (ftc)?";
    text.innerText = "Что-то определеноо нужно";
    
    checkTopic();
      //убираем предыдущие кнопки
      btn2.classList.remove("question__block--active");
      btn3.classList.remove("question__block--active");
}

//-----------------------------------------can
function showcan() {
    btn2.classList.add("question__block--active");
    question.innerText = " Могу ли я не заработать, инвестируя с future technologies company (ftc)?";
    text.innerText = "Возможно";
    
    checkTopic();
      //убираем предыдущие кнопки
      btn1.classList.remove("question__block--active");
      btn3.classList.remove("question__block--active");
}

//-----------------------------------------which
function showwhich() {
    btn3.classList.add("question__block--active");
    question.innerText = " Какая минимальная и максимальная сумма депозита?";
    text.innerText = " Минимальный размер депозита – 100 рублей. \n  \n  Максимальный размер депозита – 80 000 000 рублей.";
    
    checkTopic();
      //убираем предыдущие кнопки
      btn1.classList.remove("question__block--active");
      btn2.classList.remove("question__block--active");
}
