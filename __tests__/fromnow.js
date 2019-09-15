import { equal } from 'assert';
import { NOW, MIN, DAY, MONTH, YEAR } from '../util/date';

import { createFromnow, ua, ru, en } from '../src';

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
