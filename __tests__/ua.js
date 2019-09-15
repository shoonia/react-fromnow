import { equal } from 'assert';
import { NOW, MIN, HOUR, DAY, MONTH, YEAR } from '../util/date';

import calc from '../lib/calculate';
import ua from '../langs/ua';

const lang = ua();

// just now

test('зараз', () => {
  equal(calc(NOW, lang), 'зараз');
});

test('зараз', () => {
  equal(calc(NOW + MIN - 1, lang), 'зараз');
});

test('зараз', () => {
  equal(calc(NOW - MIN + 1, lang), 'зараз');
});

// min

test('через 1 хвилину', () => {
  equal(calc(NOW + MIN, lang), 'через 1 хвилину');
});

test('1 хвилину тому назад', () => {
  equal(calc(NOW - MIN, lang), '1 хвилину тому назад');
});

test('через 2 хвилини', () => {
  equal(calc(NOW + MIN * 2, lang), 'через 2 хвилини');
});

test('5 хвилин тому назад', () => {
  equal(calc(NOW - MIN * 5, lang), '5 хвилин тому назад');
});

// hour

test('через 1 годину', () => {
  equal(calc(NOW + HOUR, lang), 'через 1 годину');
});

test('1 годину тому назад', () => {
  equal(calc(NOW - HOUR, lang), '1 годину тому назад');
});

test('через 2 години', () => {
  equal(calc(NOW + HOUR * 2, lang), 'через 2 години');
});

test('5 годин тому назад', () => {
  equal(calc(NOW - HOUR * 5, lang), '5 годин тому назад');
});

// day

test('через 1 день', () => {
  equal(calc(NOW + DAY, lang), 'через 1 день');
});

test('1 день тому назад', () => {
  equal(calc(NOW - DAY, lang), '1 день тому назад');
});

test('через 2 дні', () => {
  equal(calc(NOW + DAY * 2, lang), 'через 2 дні');
});

test('5 днів тому назад', () => {
  equal(calc(NOW - DAY * 5, lang), '5 днів тому назад');
});

// month

test('через 1 місяць', () => {
  equal(calc(NOW + MONTH, lang), 'через 1 місяць');
});

test('1 місяць тому назад', () => {
  equal(calc(NOW - MONTH, lang), '1 місяць тому назад');
});

test('через 2 місяці', () => {
  equal(calc(NOW + MONTH * 2, lang), 'через 2 місяці');
});

test('5 місяців тому назад', () => {
  equal(calc(NOW - MONTH * 5, lang), '5 місяців тому назад');
});

// year

test('через 1 рік', () => {
  equal(calc(NOW + YEAR, lang), 'через 1 рік');
});

test('1 рік тому назад', () => {
  equal(calc(NOW - YEAR, lang), '1 рік тому назад');
});

test('через 2 роки', () => {
  equal(calc(NOW + YEAR * 2, lang), 'через 2 роки');
});

test('5 років тому назад', () => {
  equal(calc(NOW - YEAR * 5, lang), '5 років тому назад');
});
