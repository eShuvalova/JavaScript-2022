'use sctrict';

/* Код с комментариями. Ниже есть без комментариев и проверок */
/* поиск корзины */
const basketEl =  document.querySelector('.basket');
// console.log(basketEl);

/* поиск значка корзины, по кот кликаем */
const basketClick = document.querySelector('.cartIconWrap');
// console.log(basketClick);

/* поиск контейнера со всеми товарами */
const productEl = document.querySelector('.featuredItems');
// console.log(productEl);

/* поиск значка у закрытой корзины, где прописано кол-во товаров */
const basketTotalEl = basketClick.querySelector('.cartIconWrap span');
// console.log(basketTotalEl.textContent);

/* поиск блока с отображением суммы товаров в корзине */
const sumInBasket = basketEl.querySelector('.basketTotal span');
// console.log(sumInBasket.textContent);

/* функция показа/скрывания корзины при клике */
basketClick.addEventListener('click', () => { 
  // console.log(111); // проверка срабатывания клика
  basketEl.classList.toggle('hidden'); 
});

/* создание корзины, хранящей товары в виде об-та
  * { id: 1, // идентификатор из data-атрибутов
  *   name: "product 1", // название из data-атрибутов
  *   price: 10, // цена из data-атрибутов
  *   count: 0, // кол-во купленных товаров
  * } 
*/
const basket = {};

/* навешивание события клика на кнопку добавления в корзину */
productEl.addEventListener('click', () => {
  // console.log(222); // проверка срабатывания клика
  // console.log(event.target); // проверка целевого элемента

  /* если целевой эл-т не содержит класс, который назначен кнопке, то выйти */
    if (!event.target.closest('.addToCart')) { 
      return;
    } 
    // console.log(444); // проверка клика на кнопку "в корзину"

  /* при клике поиск товара с его характеристиками */
  const featuredItem = event.target.closest('.featuredItem');
  // console.log(featuredItem);

  /* получение данных из товара */
  const id = featuredItem.dataset.id;
  const name = featuredItem.dataset.name;
  const price = featuredItem.dataset.price;
  // console.log(id, name, price);
    
  /* вызов ф-ии доб-я в корзину */
  addToCart(id, name, price);
  });

/* создание ф-ции добавления товара в корзину */
function addToCart(id, name, price) {
  // console.log(555); // проверка срабатывания при клике
  // console.log(id, name, price); 
    
  /* проверка идент-ра товара.
   * если такого в корзине не сущ-ет, то созд-е нового
  */
  if (!(id in basket)) {
    
    /* созд-е нового об-та для помещения в корзину */
    basket[id] = {
      id: id,
      name: name,
      price: price,
      count: 0, // счётчик товаров (изначально 0)
    } 
  } 
        
  /* если товар существует, то счётчик товаров увеличивается на один */
  basket[id].count++;
    
  /* количество купленных товаров, возвращённых из ф-ции ниже, 
   * записывается в значке в корзине
  */
  basketTotalEl.textContent = getTotalBasketCount();
  // console.log(basketTotalEl.textContent);

  /* сумма всех купленных товаров */
  sumInBasket.textContent = getTotalPrice(); // возвращается число
  // console.log(sumInBasket.textContent);
    
  /* вызов функции отображения товаров в корзине */
  showProductsInBasket(id); 
}

/* ф-я складывания купленных товаров (её списала), ф-я возвращает число */
function getTotalBasketCount() {
  return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

/* ф-я складывания цен всех купленных товаров (тоже списала) */
function getTotalPrice () {
  return Object.values(basket)
    .reduce((acc, product) => acc + product.count * product.price, 0);
}

/* создание ф-ии отображения товаров в корзине */
function showProductsInBasket(id) {
    
  /* поиск элемента в корзине с определённым атрибутом
   * (эту часть поиска уже вставленного товара тоже списала, 
   * очень тяжело для понимания)
  */
  const basketRowEl = basketEl.querySelector(`.basketRow[data-id = "${id}"]`);
  // console.log(basketRowEl);
  /* если товара с указанным id нет, то создаётся новый */
  if (!basketRowEl) {
    showNewProductInBasket(id);
    return;
  }
    
  /* увел-е кол-ва одинаковых купленных товаров, помещённых в корзину */
  basketRowEl.querySelector('.productCount').textContent = basket[id].count;
    
  /* увел-е стоимости одинаковых купленных товаров, помещённых в корзину */
  basketRowEl.querySelector('.productTotalRow')
  .textContent = (basket[id].count * basket[id].price).toFixed(2);
}

/* ф-я созд-я товаров в корзине (в неё передаётся id товара) 
 * (её тоже списала вместе с разметкой)
*/
function showNewProductInBasket(productId) { 
  const productRow = `
    <div class="basketRow" data-id="${productId}">
      <div>${basket[productId].name}</div>
      <div>
        <span class="productCount">${basket[productId].count}</span> шт.
      </div>
      <div>$${basket[productId].price}</div>
      <div>
        $<span class="productTotalRow">
          ${(basket[productId].price * basket[productId].count).toFixed(2)}
        </span>
      </div>
    </div>
  `;
     
  /* нах-е блока с общей стоимостью, перед которым будет вставка разметки */
  const basketTotalSum = basketEl.querySelector('.basketTotal');
  // console.log(basketTotalSum);
     
  /* вставка разметки перед блоком с общей стоимостью */
  basketTotalSum.insertAdjacentHTML("beforebegin", productRow);
}



/* код без комментариев 
const basketEl =  document.querySelector('.basket');
const basketClick = document.querySelector('.cartIconWrap');
const productEl = document.querySelector('.featuredItems');
const basketTotalEl = basketClick.querySelector('.cartIconWrap span');
const sumInBasket = basketEl.querySelector('.basketTotal span');
  
basketClick.addEventListener('click', () => { 
  basketEl.classList.toggle('hidden'); 
});

const basket = {};
 
productEl.addEventListener('click', () => {
  if (!event.target.closest('.addToCart')) { 
    return;
  } 

  const featuredItem = event.target.closest('.featuredItem');
  const id = featuredItem.dataset.id;
  const name = featuredItem.dataset.name;
  const price = featuredItem.dataset.price;

  addToCart(id, name, price);
});

function addToCart(id, name, price) {
  if (!(id in basket)) {
    basket[id] = {
      id: id,
      name: name,
      price: price,
      count: 0,
    } 
  } 
      
  basket[id].count++;
  basketTotalEl.textContent = getTotalBasketCount();

  sumInBasket.textContent = getTotalPrice(); 
  showProductsInBasket(id); 
}

function getTotalBasketCount() {
  return Object.values(basket)
    .reduce((acc, product) => acc + product.count, 0);
}

function getTotalPrice () {
  return Object.values(basket)
    .reduce((acc, product) => acc + product.count * product.price, 0);
}

function showProductsInBasket(id) {
  const basketRowEl = basketEl.querySelector(`.basketRow[data-id = "${id}"]`);
  if (!basketRowEl) {
    showNewProductInBasket(id);
    return;
  }

  basketRowEl.querySelector('.productCount').textContent = basket[id].count;
  basketRowEl.querySelector('.productTotalRow')
    .textContent = (basket[id].count * basket[id].price).toFixed(2);
}

function showNewProductInBasket(productId) { 
  const productRow = `
   <div class="basketRow" data-id="${productId}">
     <div>${basket[productId].name}</div>
     <div>
       <span class="productCount">${basket[productId].count}</span> шт.
     </div>
     <div>$${basket[productId].price}</div>
     <div>
       $<span class="productTotalRow">
         ${(basket[productId].price * basket[productId].count).toFixed(2)}
       </span>
     </div>
   </div>
   `;

  const basketTotalSum = basketEl.querySelector('.basketTotal');
  basketTotalSum.insertAdjacentHTML("beforebegin", productRow);
}
*/ 