import calculateTotal from './orders.js';

const orders = [
  { id: 1, name: 'Keyboard', price: 300000, quantity: 2 },
  { id: 2, name: 'Mouse', price: 150000, quantity: 3 },
];

console.log('Total Harga:', calculateTotal(orders));
