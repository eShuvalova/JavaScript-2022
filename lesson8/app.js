'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});


/* разбор уже написанного кода в app.js (для себя) */

  /*
  let fitlerPopup = document.querySelector('.filterPopup');
  // console.log(fitlerPopup); // поиск класса фильтров
  let fitlerLabel = document.querySelector('.filterLabel');
  // console.log(fitlerLabel); // поиск класса у надписи "фильтр"
  let filterIcon = document.querySelector('.filterIcon');
  // console.log(filterIcon); // поиск класса иконки с тремя черточками

  fitlerLabel.addEventListener('click', function() { // при клике
    fitlerPopup.classList.toggle('hidden'); // доб-е или удал-е класса hidden 
    // блоку фильтров, раскрытие фильтра поиска
    fitlerLabel.classList.toggle('filterLabelPink'); // раскраска слова "фильтр" 
    // розовым при клике
    filterIcon.classList.toggle('filterIconPink'); // раскраска меню розовым

    if (filterIcon.getAttribute('src') === 'images/filter.svg') { // если класс 
        // иконки фильтра содержит атрибут images/filter.svg, то
        filterIcon.setAttribute('src', 'images/filterHover.svg') // заходим 
        // в цикл и выводим розовую иконку
    } else { // иначе 
        filterIcon.setAttribute('src', 'images/filter.svg') // выводим черную иконку
    }
  });

  let filterHeaders = document.querySelectorAll('.filterCategoryHeader'); // поиск 
  // названий подменю "фильтра"
  // console.log(filterHeaders); // об-т NodeList(3)
  filterHeaders.forEach(function(header) { // перебор значений об-та (подпунктов меню)
    // console.log(header); // в ф-ю поступает эл-т об-та (блок с назв-ем подкатегории) 
    header.addEventListener('click', function(event) { // ловим событие клика 
        // на всплытии на родителя (header)
        // console.log(event.target); // целев эл-т, по кот был клик 
        // (блок (не слово с назв-ем подк-ии))
        event.target.nextElementSibling.classList.toggle('hidden'); // удал-е или 
        // доб-е класса hidden соседним элементам от того, на который кликнули,
        // чт раскрыть/скрыть список из подменю
    })
  });

  let filterSizes = document.querySelector('.filterSizes');
  // console.log(filterSizes); // нах-е блока с элементами размера
  let filterSizeWrap = document.querySelector('.filterSizeWrap');
  // console.log(filterSizeWrap); // нах-е блока с классом размер
  filterSizeWrap.addEventListener('click', function() { // при клике 
    filterSizes.classList.toggle('hidden'); // изм-е класса блоку с размерами
  });
 */