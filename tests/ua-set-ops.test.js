import { NOW, MONTH, YEAR } from './util/date';
import calc from '../src/lib/calculate';
import ua from '../src/langs/ua';

describe('UA set options', () => {
  it('change ops', () => {
    const lang = ua({
      now: '1.) just now',
      was: '2.) %% ago',
      will: '3.) %% from now'
    });

    expect(calc(NOW, lang)).toBe('1.) just now');
    expect(calc(NOW - MONTH * 5, lang)).toBe('2.) 5 місяців ago');
    expect(calc(NOW + YEAR * 2, lang)).toBe('3.) 2 роки from now');
  });
});
