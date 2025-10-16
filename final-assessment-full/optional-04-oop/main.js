import Item from './Item.js';
import Inventory from './Inventory.js';

const inventory = new Inventory();

const item1 = new Item(1, 'Laptop', 5, 15000000);
const item2 = new Item(2, 'Mouse', 10, 250000);

inventory.addItem(item1);
inventory.addItem(item2);

console.log('Daftar Barang:');
console.log(inventory.listItems());

inventory.removeItem(1);

console.log('\nSetelah Hapus Item ID 1:');
console.log(inventory.listItems());
