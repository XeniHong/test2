// Получаем элемент кнопок
const blockText = document.querySelector('.startap__textButton');
const categoryText = document.querySelector('.change__text--category');
const tittleText = document.querySelector('.change__text--tittle');
const longText = document.querySelector('.change__longText--1');
const long2Text = document.querySelector('.change__longText--2');

const ifText=document.querySelector('.startap__text');
const topicText=document.querySelector('.startap__topic');


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
//-----------------------------------------Криптовалюты
function showcrypt() {
    cryptButton.classList.add("startap__block--active");
    categoryText.innerText = "Стартапы из сферы:";
    tittleText.innerText = "Криптовалюты";
    longText.innerHTML = "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: социально-экономическое развитие однозначно фиксирует необходимость новых принципов формирования материально-технической и кадровой базы.";
    long2Text.innerHTML = "Наше дело не так однозначно, как может показаться: постоянный количественный рост и сфера нашей активности способствует повышению качества анализа существующих паттернов поведения. Картельные сговоры не допускают ситуации, при которой интерактивные прототипы являются только методом политического участия и своевременно верифицированы. Есть над чем задуматься: сделанные на базе интернет-аналитики выводы описаны максимально подробно.";

    checkTopic();
      //убираем предыдущие кнопки
      aiButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

//-----------------------------------------ИИ в сфере беттинга
function showai() {
    aiButton.classList.add("startap__block--active");
    categoryText.innerText = "Технология из сферы:";
    tittleText.innerText = "ИИ в сфере беттинга";
    longText.innerHTML = " Запатентованный инфопродукт собственного производства на основе искусственного интеллекта служит нам подспорьем, гарантируя стабильный, практически пассивный доход в сфере беттинга.";
    long2Text.innerHTML = " Искусственный интеллект на основе нейросети, постоянно обучаясь, в реальном времени анализирует коэффициенты и иные переменные в зарубежных букмекерских конторах, дополняя анализ статистическими данными игры, и выносит прогноз, крайне редко ошибаясь. ";

    
    checkTopic();
      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

//-----------------------------------------Блокчейн и ICO
function showico() {
    icoButton.classList.add("startap__block--active");
    categoryText.innerText = "Стартапы из сферы:";
    tittleText.innerText = "Блокчейн и ICO";
    longText.innerHTML = "Задача организации, в особенности же убеждённость некоторых оппонентов влечет за собой процесс внедрения и модернизации инновационных методов управления процессами.";
    long2Text.innerHTML = "Равным образом, современная методология разработки позволяет оценить значение дальнейших направлений развития. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности говорит о возможностях как самодостаточных, так и внешне зависимых концептуальных решений. Мы вынуждены отталкиваться от того, что повышение уровня гражданского сознания однозначно определяет каждого участника как способного принимать собственные решения касаемо направлений прогрессивного развития.";

    checkTopic();
      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      aiButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

//-----------------------------------------VR- технологии
function showvr() {
    vrButton.classList.add("startap__block--active");
    categoryText.innerText = "Стартапы из сферы:";
    tittleText.innerText = "VR- технологии";
    longText.innerHTML = "Разнообразный и богатый опыт говорит нам, что убеждённость некоторых оппонентов напрямую зависит от вывода текущих активов.";
    long2Text.innerHTML = "И нет сомнений, что независимые государства неоднозначны и будут подвергнуты целой серии независимых исследований. Господа, семантический разбор внешних противодействий, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для своевременного выполнения сверхзадачи. В частности, базовый вектор развития требует от нас анализа существующих финансовых и административных условий.";

    checkTopic();
      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      aiButton.classList.remove("startap__block--active");
      gButton.classList.remove("startap__block--active");
}

//-----------------------------------------Внедрение сетей 5G
function showg() {
    gButton.classList.add("startap__block--active");
    categoryText.innerText = "Стартапы из сферы:";
    tittleText.innerText = "Внедрение сетей 5G";
    longText.innerHTML = "Вот вам яркий пример современных тенденций — высокое качество позиционных исследований играет важную роль в формировании укрепления моральных ценностей.";
    long2Text.innerHTML = "Идейные соображения высшего порядка, а также экономическая повестка сегодняшнего дня говорит о возможностях приоретизации разума над эмоциями. Также как постоянный количественный рост и сфера нашей активности обеспечивает актуальность модели развития. Картельные сговоры не допускают ситуации, при которой акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, объективно рассмотрены соответствующими инстанциями.";

    checkTopic();
      //убираем предыдущие кнопки
      cryptButton.classList.remove("startap__block--active");
      icoButton.classList.remove("startap__block--active");
      vrButton.classList.remove("startap__block--active");
      aiButton.classList.remove("startap__block--active");
}


function checkTopic () {
  if(categoryText.innerHTML == "Стартапы из сферы:"){
  topicText.innerText = "Стартапы из сферы";
  // console.log(categoryText.innerHTML);
} else {
  topicText.innerText = "Технология из сферы";
  // console.log(categoryText.innerHTML);
}
}
 