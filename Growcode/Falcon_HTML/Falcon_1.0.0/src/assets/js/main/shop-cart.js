// @charset "UTF-8";
/*!
 * Shopping cart js
 * Falcon Template v1.0.0 (https://falconhtml.netlify.app/)
 * Copyright 2023 The Falcon Authors * Designed & Develop By FluxsiApp
 */

'use strict';

let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector('.cart');
const addtocartbtnDom = document.querySelectorAll(
  '[data-action="add-to-cart"]'
);

addtocartbtnDom.forEach((addtocartbtnDom) => {
  addtocartbtnDom.addEventListener('click', () => {
    const productDom = addtocartbtnDom.parentNode.parentNode;
    const product = {
      img: productDom.querySelector('.product-img').getAttribute('src'),
      name: productDom.querySelector('.product-name').innerText,
      price: productDom.querySelector('.product-price').innerText,
      quantity: 1,
    };
    function cartLonelyText() {
      if (itemsInCart === 0) $('#cart').append('So lonely here, add something');
    }

    const IsinCart =
      cart.filter((cartItem) => cartItem.name === product.name).length > 0;
    if (IsinCart === false) {
      cartDom.insertAdjacentHTML(
        'beforeend',
        `
  <div class="cart-items animated flipInX">
    <div class="p-2 border">
        <img src="${product.img}" alt="${product.name}" style="max-width: 50px;"/>
    </div>
    <div class="p-2">
        <p class="cart_item_name mb-0">${product.name}</p>
    </div>
    <div class="p-2">
    <span class="d-flex justify-content-center text-success"> &#36 <span> <p class="text-success cart_item_price mb-0">${product.price}</p> </span> </span>
    </div>
    <div class="p-2 qty">
        <button class="btn btn-secondary me-3" type="button" data-action="increase-item">&plus; </button>
      <p class="text-success cart_item_quantity mb-0">${product.quantity}</p>
      <button class="btn btn-info ms-3" type="button" data-action="decrease-item">&minus; </button>
    </div>
    <div class="p-2 float-end">
      <button class="btn btn-danger" type="button" data-action="remove-item">&times;
    </div>
  </div> `
      );

      if (document.querySelector('.cart-footer') === null) {
        cartDom.insertAdjacentHTML(
          'afterend',
          `
      <div class="d-flex flex-row shadow-sm card cart-footer mt-2 mb-3 animated flipInX">
        <div class="p-2">
          <button class="btn btn-danger" type="button" data-action="clear-cart">Clear Cart
        </div>
        <div class="p-2 ml-auto">
          <button class="btn btn-dark" type="button" data-action="check-out">Pay <span class="pay"></span> 
            &#10137;
        </div>
      </div>`
        );
      }

      addtocartbtnDom.innerText = 'In cart';
      addtocartbtnDom.disabled = true;
      cart.push(product);

      const cartItemsDom = cartDom.querySelectorAll('.cart-items');
      cartItemsDom.forEach((cartItemDom) => {
        if (
          cartItemDom.querySelector('.cart_item_name').innerText ===
          product.name
        ) {
          cartTotal +=
            parseInt(
              cartItemDom.querySelector('.cart_item_quantity').innerText
            ) *
            parseInt(cartItemDom.querySelector('.cart_item_price').innerText);
          document.querySelector('.pay').innerText = '$' + cartTotal;

          // increase item in cart
          cartItemDom
            .querySelector('[data-action="increase-item"]')
            .addEventListener('click', () => {
              cart.forEach((cartItem) => {
                if (cartItem.name === product.name) {
                  cartItemDom.querySelector('.cart_item_quantity').innerText =
                    ++cartItem.quantity;
                  cartItemDom.querySelector('.cart_item_price').innerText =
                    parseInt(cartItem.quantity) * parseInt(cartItem.price);
                  cartTotal += parseInt(cartItem.price);
                  document.querySelector('.pay').innerText = '$' + cartTotal;
                }
              });
            });

          // decrease item in cart
          cartItemDom
            .querySelector('[data-action="decrease-item"]')
            .addEventListener('click', () => {
              cart.forEach((cartItem) => {
                if (cartItem.name === product.name) {
                  if (cartItem.quantity > 1) {
                    cartItemDom.querySelector('.cart_item_quantity').innerText =
                      --cartItem.quantity;
                    cartItemDom.querySelector('.cart_item_price').innerText =
                      parseInt(cartItem.quantity) * parseInt(cartItem.price);
                    cartTotal -= parseInt(cartItem.price);
                    document.querySelector('.pay').innerText = '$' + cartTotal;
                  }
                }
              });
            });

          //remove item from cart
          cartItemDom
            .querySelector('[data-action="remove-item"]')
            .addEventListener('click', () => {
              cart.forEach((cartItem) => {
                if (cartItem.name === product.name) {
                  cartTotal -= parseInt(
                    cartItemDom.querySelector('.cart_item_price').innerText
                  );
                  document.querySelector('.pay').innerText = cartTotal;
                  cartItemDom.remove();
                  cart = cart.filter(
                    (cartItem) => cartItem.name !== product.name
                  );
                  addtocartbtnDom.innerText = 'Add to cart';
                  addtocartbtnDom.disabled = false;
                }
                if (cart.length < 1) {
                  document.querySelector('.cart-item-container').innerHTML =
                    '<div class="missing-cart"><div><div class="missing-cart-img"><img src="assets/images/shop-cart/missing-cart.png" alt=""></div><div class="missing-cart-text"><h3> Missing Cart Item </h3> <p class="text-muted cart_item_name">There is nothing in your cart. Let\'s add some items.</p></div></div></div>';
                  ('<div class="cart-items animated flipInX"><div class="p-2"><p class="cart_item_name mb-0">There is nothing in your cart. Let\'s add some items.</p></div></div>');
                  document.querySelector('.cart-footer').remove();
                }
              });
            });

          //clear cart
          document
            .querySelector('[data-action="clear-cart"]')
            .addEventListener('click', () => {
              cartItemDom.remove();
              cart = [];
              cartTotal = 0;
              if (document.querySelector('.cart-footer') !== null) {
                document.querySelector('.cart-footer').remove();
              }
              addtocartbtnDom.innerText = 'Add to cart';
              addtocartbtnDom.disabled = false;
            });
        }
      });
    } else {
      $('.total').html('empty cart');
    }
  });
});

function animateImg(img) {
  img.classList.add('animated', 'shake');
}

function normalImg(img) {
  img.classList.remove('animated', 'shake');
}
$('.like-btn').on('click', function () {
  $(this).toggleClass('is-active');
});

$(function () {
  if ($('.default-cart').length > 0) {
    $('.default-cart').trigger('click');
    console.log($('.default-cart'));
  }
});

// /********** Shop Product Jquery **********/
// Quantity Button
$('.qtyminus').on('click', function () {
  var now = $('.qty').val();
  if ($.isNumeric(now)) {
    if (parseInt(now) - 1 > 0) {
      now--;
    }
    $('.qty').val(now);
  }
});
$('.qtyplus').on('click', function () {
  var now = $('.qty').val();
  if ($.isNumeric(now)) {
    $('.qty').val(parseInt(now) + 1);
  }
});

// Image Hover
$('.box').on({
  mouseover: function () {
    $(this).find('img:nth-child(1)').stop().animate({ opacity: 0 }, 600);
    $(this).find('img:nth-child(2)').stop().animate({ opacity: 1 }, 600);
  },
  mouseout: function () {
    $(this).find('img:nth-child(1)').stop().animate({ opacity: 1 }, 600);
    $(this).find('img:nth-child(2)').stop().animate({ opacity: 0 }, 600);
  },
});
