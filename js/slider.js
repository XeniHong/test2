// Получаем элемент слайдера и кнопки
const slides = document.querySelector('.header__slider');
const firstButton = document.querySelector('.first-btn');
const secondButton = document.querySelector('.second-btn');
const thirdButton = document.querySelector('.third-btn');


// Устанавливаем обработчики событий для кнопок
firstButton.addEventListener('click', showFirstSlide);
secondButton.addEventListener('click', showSecondSlide);
thirdButton.addEventListener('click', showThirdSlide);

firstButton.classList.add("slider__dot--active")
slides.style.backgroundImage = "url(./img/header/headerSlider.png)";

// Функция показа 
function showFirstSlide() {
  firstButton.classList.add("slider__dot--active");
  slides.style.backgroundImage = "url(./img/header/headerSlider.png)";
  //убираем предыдущие кнопки
  secondButton.classList.remove("slider__dot--active");
  thirdButton.classList.remove("slider__dot--active");
}

function showSecondSlide() {
  secondButton.classList.add("slider__dot--active");
  slides.style.backgroundImage = "url(./img/header/header2.png)";
     
  firstButton.classList.remove("slider__dot--active");
  thirdButton.classList.remove("slider__dot--active");
}

function showThirdSlide() {
  thirdButton.classList.add("slider__dot--active");
  slides.style.backgroundImage = "url(./img/header/header3.png)";
        
  secondButton.classList.remove("slider__dot--active");
  firstButton.classList.remove("slider__dot--active");
}
