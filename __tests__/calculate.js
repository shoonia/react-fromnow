import { equal } from 'assert';

import { NOW, MIN, HOUR, DAY, MONTH, YEAR } from '../util/date';
import calc from '../src/lib/calculate';
import { en } from '../src';

const lang = en();

// just now

test('just now', () => {
  equal(calc(NOW, lang), 'just now');
});

test('just now', () => {
  equal(calc(NOW + MIN - 1, lang), 'just now');
});

test('just now', () => {
  equal(calc(NOW - MIN + 1, lang), 'just now');
});

// min

test('1 minute from now', () => {
  equal(calc(NOW + MIN, lang), '1 minute from now');
});

test('1 minute ago', () => {
  equal(calc(NOW - MIN, lang), '1 minute ago');
});

test('2 minutes from now', () => {
  equal(calc(NOW + MIN * 2, lang), '2 minutes from now');
});

test('5 minutes ago', () => {
  equal(calc(NOW - MIN * 5, lang), '5 minutes ago');
});

// hour

test('1 hour from now', () => {
  equal(calc(NOW + HOUR, lang), '1 hour from now');
});

test('1 hour ago', () => {
  equal(calc(NOW - HOUR, lang), '1 hour ago');
});

test('2 hours from now', () => {
  equal(calc(NOW + HOUR * 2, lang), '2 hours from now');
});

test('5 hours ago', () => {
  equal(calc(NOW - HOUR * 5, lang), '5 hours ago');
});

// day

test('1 day from now', () => {
  equal(calc(NOW + DAY, lang), '1 day from now');
});

test('1 day ago', () => {
  equal(calc(NOW - DAY, lang), '1 day ago');
});

test('2 days from now', () => {
  equal(calc(NOW + DAY * 2, lang), '2 days from now');
});

test('5 days ago', () => {
  equal(calc(NOW - DAY * 5, lang), '5 days ago');
});

// month

test('1 month from now', () => {
  equal(calc(NOW + MONTH, lang), '1 month from now');
});

test('1 month ago', () => {
  equal(calc(NOW - MONTH, lang), '1 month ago');
});

test('2 months from now', () => {
  equal(calc(NOW + MONTH * 2, lang), '2 months from now');
});

test('5 months ago', () => {
  equal(calc(NOW - MONTH * 5, lang), '5 months ago');
});

// year

test('1 year from now', () => {
  equal(calc(NOW + YEAR, lang), '1 year from now');
});

test('1 year ago', () => {
  equal(calc(NOW - YEAR, lang), '1 year ago');
});

test('2 years from now', () => {
  equal(calc(NOW + YEAR * 2, lang), '2 years from now');
});

test('5 years ago', () => {
  equal(calc(NOW - YEAR * 5, lang), '5 years ago');
});
