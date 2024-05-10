// Получаем элемент кнопок
const blockText = document.querySelector('.startap__textButton');
const categoryText = document.querySelector('.change__text--category');
const tittleText = document.querySelector('.change__text--tittle');

const cryptButton = document.querySelector('.btn__crypt');
const aiButton = document.querySelector('.btn__ai');
const icoButton = document.querySelector('.btn__ico');
const vrButton = document.querySelector('.btn__vr');
const gButton = document.querySelector('.btn__5g');


// Устанавливаем обработчики событий для кнопок
cryptButton.addEventListener('click', showcrypt);
aiButton.addEventListener('click', showai);
icoButton.addEventListener('click', showico);
vrButton.addEventListener('click', showvr);
gButton.addEventListener('click', showg);

aiButton.classList.add("startap__block--active")
categoryText.innerText = "Технология из сферы:";
tittleText.innerText = " ИИ в сфере беттинга";

// Функция показа 
function showcrypt() {
    cryptButton.classList.add("startap__block--active");
    categoryText.innerText = "   Стартапы из сферы:";
    tittleText.innerText = "   Криптовалюты";

      //убираем предыдущие кнопки
      aiButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

function showai() {
    aiButton.classList.add("startap__block--active");
    categoryText.innerText = "   Технология из сферы:";
    tittleText.innerText = "   ИИ в сфере беттинга";

      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

function showico() {
    icoButton.classList.add("startap__block--active");
    categoryText.innerText = "   Стартапы из сферы:";
    tittleText.innerText = "   Блокчейн и ICO";

      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      aiButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

function showvr() {
    vrButton.classList.add("startap__block--active");
    categoryText.innerText = "   Стартапы из сферы:";
    tittleText.innerText = "      VR- технологии";

      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      aiButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

function showg() {
    gButton.classList.add("startap__block--active");
    categoryText.innerText = "   Стартапы из сферы:";
    tittleText.innerText = "  Внедрение сетей 5G";

      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      aiButton.classList.remove("startap__block--active");
}























// const accordeon = document.querySelector(".startap__blocks");
// const accordeonTitles = accordeon.querySelectorAll(".startap__block");

// for( let accordeonTitle of accordeonTitles) {    
//     accordeonTitle.addEventListener("click", function () {      
//         const item = accordeonTitle.parentElement.querySelector(".startap__block");
//         if ( item.classList.contains(".startap__block--active")){    
//             item.classList.remove(".startap__block--active");
//         }
//         else {
//             item.classList.add(".startap__block--active");
//         }
//     });
//  }