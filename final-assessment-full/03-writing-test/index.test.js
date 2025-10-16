import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('Menjumlahkan angka nol', () => {
  assert.strictEqual(sum(0, 5), 5);
});

test('Menjumlahkan angka negatif', () => {
  assert.strictEqual(sum(-2, -3), -5);
});
