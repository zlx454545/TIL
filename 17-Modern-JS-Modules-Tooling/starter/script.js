//habituation, module theory

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('importing module');

// addToCart('bread', 5);
// console.log(price, tq);

// const totalPrice = 37;
// console.log(totalPrice);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// console.log(cart);

// const shoppingCart2 = (function () {
//   const cart = [];
//   let shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuntity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     shippingCost -= 4;
//     console.log(
//       `${quantity} ${product} added to cart, shipping cost ${shippingCost}`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuntity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);

// // Export
// export.addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         shippingCost -= 4;
//         console.log(
//           `${quantity} ${product} added to cart, shipping cost ${shippingCost}`
//         );
// }

// // Import
// const {addToCart} = require('./shoppingCart.js');

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
