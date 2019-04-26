import assert from 'assert';

import calc from '../lib/calculate';
import ua from '../ua';

const NOW = 1556026229910; // Tue Apr 23 2019 16:30:29 GMT+0300 (Eastern European Summer Time)

const MIN = 60 * 1e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

const equal = assert.equal;

Date.now = jest.fn(() => NOW);

test('change ops', () => {
  const lang = ua({
    now: '1.) just now',
    was: '2.) %% ago',
    will: '3.) %% from now'
  });

  equal(calc(NOW, lang), '1.) just now');
  equal(calc(NOW - MONTH * 5, lang), '2.) 5 місяців ago');
  equal(calc(NOW + YEAR * 2, lang), '3.) 2 роки from now');
});
