import assert from 'assert';

import { createFromnow, ua, ru, en } from '../index';

const NOW = 1556026229910; // Tue Apr 23 2019 16:30:29 GMT+0300 (Eastern European Summer Time)

const MIN = 60 * 1e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const equal = assert.equal;

Date.now = jest.fn(() => NOW);

// en

test('createFromnow en', () => {
  const calc = createFromnow();

  equal(calc(NOW + MIN), '1 minute from now');
});

test('createFromnow en', () => {
  const calc = createFromnow(en);

  equal(calc(NOW), 'just now');
});

test('createFromnow en with ops', () => {
  const calc = createFromnow(en, {
    now: '',
    was: '0_o %%',
    will: ''
  });

  equal(calc(NOW - DAY), '0_o 1 day');
});

// ua

test('createFromnow ua', () => {
  const calc = createFromnow(ua);

  equal(calc(NOW), 'зараз');
});

test('createFromnow ua with ops', () => {
  const calc = createFromnow(ua, {
    now: '',
    was: '',
    will: '0_o %% !!'
  });

  equal(calc(NOW + MONTH), '0_o 1 місяць !!');
});

// ru

test('createFromnow ru', () => {
  const calc = createFromnow(ru);

  equal(calc(NOW - MIN), '1 минуту назад');
});

test('createFromnow ru with ops', () => {
  const calc = createFromnow(ru, {
    now: '',
    was: '0_0 %% 0_0',
    will: ''
  });

  equal(calc(NOW - YEAR * 5), '0_0 5 лет 0_0');
});

test('createFromnow invalid first argument', () => {
  const calc = createFromnow({});

  equal(calc(NOW), 'just now');
});
