const cart = document.querySelector('.cart__products');
const quantityProduct = document.querySelectorAll('.product__quantity-control');
const addProduct = document.querySelectorAll('.product__add');

quantityProduct.forEach(e => {
  e.addEventListener('click', (event) => {
    
    let value = event.target.parentNode.querySelector('.product__quantity-value');
    let quantity = + value.innerText;
    
    if (event.target.classList.contains('product__quantity-control_inc')) {
      quantity++;
      value.innerText = quantity;
    } else {
      if (quantity > 1){
        quantity--;
        value.innerText = quantity;
      } else {
        value.innerText = 1;
      }
    }
  });
});

addProduct.forEach(e => {
  e.addEventListener('click', () => {
    let product = e.closest('.product');
    let id = product.dataset.id;
    let img = product.querySelector('img').src;
    let quantityValue = product.querySelector('.product__quantity-value');
    const cartProducts = Array.from(cart.getElementsByClassName('cart__product'));
    const findProduct = cartProducts.find(item => item.dataset.id === id);

    if (findProduct) {
      const productInCart = findProduct.querySelector('.cart__product-count');
      productInCart.textContent = +quantityValue.textContent + +productInCart.textContent;
    } else {
      cart.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${id}">
      <img class="cart__product-image" src="${img}">
      <div class="cart__product-count">${quantityValue.textContent}</div>
      </div>`); 
    }
  });
});