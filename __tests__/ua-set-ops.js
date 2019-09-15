import { equal } from 'assert';
import { NOW, MONTH, YEAR } from '../util/date';

import calc from '../lib/calculate';
import ua from '../langs/ua';

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
