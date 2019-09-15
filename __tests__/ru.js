import { equal } from 'assert';
import { NOW, MIN, HOUR, DAY, MONTH, YEAR } from '../util/date';

import calc from '../lib/calculate';
import ru from '../langs/ru';

const lang = ru();

// just now

test('только что', () => {
  equal(calc(NOW, lang), 'только что');
});

test('только что', () => {
  equal(calc(NOW + MIN - 1, lang), 'только что');
});

test('только что', () => {
  equal(calc(NOW - MIN + 1, lang), 'только что');
});

// min

test('через 1 минуту', () => {
  equal(calc(NOW + MIN, lang), 'через 1 минуту');
});

test('1 минуту назад', () => {
  equal(calc(NOW - MIN, lang), '1 минуту назад');
});

test('через 2 минуты', () => {
  equal(calc(NOW + MIN * 2, lang), 'через 2 минуты');
});

test('5 минут назад', () => {
  equal(calc(NOW - MIN * 5, lang), '5 минут назад');
});

// hour

test('через 1 час', () => {
  equal(calc(NOW + HOUR, lang), 'через 1 час');
});

test('1 час назад', () => {
  equal(calc(NOW - HOUR, lang), '1 час назад');
});

test('через 2 часа', () => {
  equal(calc(NOW + HOUR * 2, lang), 'через 2 часа');
});

test('5 часов назад', () => {
  equal(calc(NOW - HOUR * 5, lang), '5 часов назад');
});

// day

test('через 1 день', () => {
  equal(calc(NOW + DAY, lang), 'через 1 день');
});

test('1 день назад', () => {
  equal(calc(NOW - DAY, lang), '1 день назад');
});

test('через 2 дня', () => {
  equal(calc(NOW + DAY * 2, lang), 'через 2 дня');
});

test('5 дней назад', () => {
  equal(calc(NOW - DAY * 5, lang), '5 дней назад');
});

// month

test('через 1 месяц', () => {
  equal(calc(NOW + MONTH, lang), 'через 1 месяц');
});

test('1 месяц назад', () => {
  equal(calc(NOW - MONTH, lang), '1 месяц назад');
});

test('через 2 месяца', () => {
  equal(calc(NOW + MONTH * 2, lang), 'через 2 месяца');
});

test('5 месяцев назад', () => {
  equal(calc(NOW - MONTH * 5, lang), '5 месяцев назад');
});

// year

test('через 1 год', () => {
  equal(calc(NOW + YEAR, lang), 'через 1 год');
});

test('1 год назад', () => {
  equal(calc(NOW - YEAR, lang), '1 год назад');
});

test('через 2 года', () => {
  equal(calc(NOW + YEAR * 2, lang), 'через 2 года');
});

test('5 лет назад', () => {
  equal(calc(NOW - YEAR * 5, lang), '5 лет назад');
});
