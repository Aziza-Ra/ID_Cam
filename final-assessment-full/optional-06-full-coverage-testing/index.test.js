import test from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(3, 5), 8);
});

test('Mengembalikan 0 jika salah satu bukan angka', () => {
  assert.strictEqual(sum('3', 5), 0);
  assert.strictEqual(sum(3, '5'), 0);
  assert.strictEqual(sum(null, 5), 0);
});

test('Mengembalikan 0 jika salah satu negatif', () => {
  assert.strictEqual(sum(-2, 5), 0);
  assert.strictEqual(sum(3, -4), 0);
});

test('Mengembalikan hasil benar jika salah satu 0', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});
